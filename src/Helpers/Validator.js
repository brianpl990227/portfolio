export const Validator = {
  // Validator
  validateDate: v => {
    const value =  new Date(v);
    const today = new Date();
   // const valueUTC = Date.UTC(value.getFullYear(), value.getMonth(), value.getDate())
    //const todayUTC = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate())

    return value < today
  },
  isEmpty: (value) => {

    const result = (value === "")

    return result
  },
  isNull: (value) => value === undefined || value === null || value === 'null',
  isNullOrEmpty(value) { return this.isNull(value) || this.isEmpty(value) },
  isNumber: (value) => !isNaN(value),
  isDate: (value) => !isNaN(new Date(value).getDate()),
  isObject: (r) => typeof r.data === 'object',
  isObjectEmpty: (r) => Object.keys(r).length === 0,
  isString: (r) => typeof r.data === 'string',
  minLength: (n, value) => value.length >= n,
  equalLength: (n, value) => value.length === n,
  maxLength: (n, value) => value.length <= n,
  regex: (regex, value) => regex.test(value),
  isMail: (email) => String(email).toLowerCase().match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  ) !== null,
  onlyNumbers(value) { return this.regex(/^\d+$/, value) },
  onlyLetters(value) { return this.regex(/^[a-zA-ZñÑáéíóú\s]+$/, value) },
  onlyLettersAndNumbers(value) { return this.regex(/^[a-zA-Z0-9ñÑáéíóú\s]+$/i, value) },
  onlyLettersAndNumbersWithoutSpace(value) { return this.regex(/^[a-zA-Z0-9ñÑáéíóú]+$/i, value) },
  is_host(value) { return this.regex(/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$|^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)+([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$/i, value) },
};