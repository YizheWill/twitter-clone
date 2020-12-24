import Validator from 'validator';
import validText from './valid-text.js';

export default (data) => {
  const errors = {};
  data.handle = validText(data.handle) ? data.handle : '';
  data.email = validText(data.email) ? data.email : '';
  data.password = validText(data.password) ? data.password : '';
  data.password2 = validText(data.password2) ? data.password2 : '';
  if (!Validator.isLength(data.handle, { min: 2, max: 30 }))
    errors.handle = 'Handle must be between 2 and 30 characters';
  if (Validator.isEmpty(data.handle)) errors.handle = 'Handle is required';
  if (!Validator.isEmail(data.email)) errors.email = 'Email is invalid';
  if (Validator.isEmpty(data.email)) errors.email = 'Email required';
  if (Validator.isEmpty(data.password)) errors.password = 'Password required';
  if (!Validator.isLength(data.password, { min: 6, max: 30 }))
    errors.password = 'Password must be between 6 and 30 characters';
  if (Validator.isEmpty(data.password2))
    errors.password2 = 'Password confirmation required';
  if (!Validator.equals(data.password, data.password2))
    errors.password2 = 'Password must match';
  return {
    errors,
    isValid: !Object.keys(errors).length,
  };
};
