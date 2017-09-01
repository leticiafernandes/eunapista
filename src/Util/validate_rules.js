import validation from "../Util/validation_messages.js";
import validatejs from "validate.js";

export default function validate(fieldName, value) {
  console.log('entrei1');
  var formValues = {}
  formValues[fieldName] = value

  var formFields = {}
  formFields[fieldName] = validation[fieldName]

  const result = validatejs(formValues, formFields)
  if (result) {
    return result[fieldName][0]
  } 
  return null
}