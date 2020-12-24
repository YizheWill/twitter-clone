import Validator from 'validator';
import validText from './valid-text.js';

export default (data) => {
  const errors = {};
  data.text = validText(data.text) ? data.text : '';
  if (!Validator.isLength(data.text, { min: 5, max: 140 }))
    errors.text = 'Handle must be between 5 and 150 characters';
  if (Validator.isEmpty(data.text)) errors.text = 'Text field is required';
  return {
    errors,
    isValid: !Object.keys(errors).length,
  };
};
