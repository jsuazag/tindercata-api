const { authentication } = require('./../services/catsService')

const login = (req, res) => {
  const { email, password } = req.query
  const response = authentication(email, password)
  res.json(response)
}

const signup = (req, res) => {
  res.send('signup ctrl')
}

const catList = (req, res) => {
  res.send('catList ctrl')
}

module.exports = {
  login,
  signup,
  catList
}
