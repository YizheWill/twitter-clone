import Validator from 'validator';
import validText from './valid-text.js';

export default (data) => {
  const errors = {};
  data.email = validText(data.email) ? data.email : '';
  data.password = validText(data.password) ? data.password : '';
  if (!Validator.isEmail(data.email)) errors.email = 'Email is invalid';
  if (Validator.isEmpty(data.email)) errors.email = 'Email required';
  if (Validator.isEmpty(data.password)) errors.password = 'Password required';
  return {
    errors,
    isValid: !Object.keys(errors).length,
  };
};
