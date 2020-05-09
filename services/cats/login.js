const jwt = require('jsonwebtoken')
const { SECRET } = require('../../config/constants')

const login = (email, password) => {
  if (email === 'nieves@gmail.com' && password === '123') {
    const catId = "123456789"
    const payload = {
      catId: catId,
      name: 'Nieves'
    }
    const token = jwt.sign(payload, SECRET)
    return {
      status: 1,
      token: token
    }
  }
  return {
    status: 2
  }
}

module.exports = login
