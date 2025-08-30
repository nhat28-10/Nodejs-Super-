const utils = require('./utils.js')
// Nếu muốn dùng trực tiếp cái sum thì thay utils thành object
const {sum,divide} = require('./utils.js')
const value = utils.sum(1,2)

const value1 = utils.divide(1,2)

const value3 = sum(1,2)
const value4 = divide(1,2)
console.log(value)
console.log(value1)
console.log(value3)
console.log(value4)