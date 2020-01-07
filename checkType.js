function checkType(data, type) {
  return Object.prototype.toString.call(data).indexOf(type) >= 0
}

const isArray = data => checkType(data, 'Array')
const isBoolean = data => checkType(data, 'Boolean')
const isNull = data => checkType(data, 'Null')
const isNumber = data => checkType(data, 'Number')
const isString = data => checkType(data, 'String')
const isUndefined = data => checkType(data, 'Undefined')
const isSymbol = data => checkType(data, 'Symbol')
const isObject = data => checkType(data, 'Object')
const isRegExp = data => checkType(data, 'RegExp')
const isDate = data => checkType(data, 'Date')
const isFunction = data => checkType(data, 'Function')
const isError = data => checkType(data, 'Error')
const isNullOrUndefined = data => checkType(data, 'Null') || checkType(data, 'Undefined')
const isPrimitive = data => {
  const primitiveTypes = ['Undefined', 'Null', 'Boolean', 'Number', 'String']
  return primitiveTypes.some(type => checkType(data, type))
}

