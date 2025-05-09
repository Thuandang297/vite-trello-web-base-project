
// Một vài biểu thức chính quy - Regular Expression và custom message.
// Về Regular Expression khá hại não: https://viblo.asia/p/hoc-regular-expression-va-cuoc-doi-ban-se-bot-kho-updated-v22-Az45bnoO5xY
export const FIELD_REQUIRED_MESSAGE = 'This field is required.'
export const EMAIL_RULE = /^\S+@\S+\.\S+$/
export const EMAIL_RULE_MESSAGE = 'Email is invalid. (example@company.com)'
export const PASSWORD_RULE = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d\W]{8,256}$/
export const PASSWORD_RULE_MESSAGE = 'Password must include at least 1 letter, a number, and at least 8 characters.'
export const PASSWORD_CONFIRMATION_MESSAGE = 'Password Confirmation does not match!'
export const NEW_PASSWORD_CONFIRMATION_MESSAGE = 'New password has not been changed!'


// Liên quan đến Validate File
export const VALIDATE_MAX_SIZE = 2 * 1024 * 1024 //2MB
export const VALIDATE_FILE_TYPE_MESSAGE = 'File type incorrect! Please upload true file type (jpeg, jpg, png)!'
export const VALIDATE_MAX_SIZE_MESSAGE = 'Please upload file < 2MB!'
export const VALIDATE_FILE_PROPERTY_MESSAGE = 'File can not have bank values!'
export const UPLOAD_FILE_SUCCESS_MESSAGE = 'File upload success!'
export const UPLOAD_FILE_FAIL_MESSAGE = 'File upload fail!'
export const VALIDATE_FILE_TYPE = ['image/jpg', 'image/jpeg', 'image/png']
export const singleFileValidator = (file) => {
  if (!file || !file.name || !file.size || !file.type) {
    return VALIDATE_FILE_PROPERTY_MESSAGE
  }
  if (file.size > VALIDATE_MAX_SIZE) {
    return VALIDATE_MAX_SIZE_MESSAGE
  }
  if (!VALIDATE_FILE_TYPE.includes(file.type)) {
    return VALIDATE_FILE_TYPE_MESSAGE
  }
  return null
}

