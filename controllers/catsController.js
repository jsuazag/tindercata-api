const loginService = require('../services/cats/login-service')

const login = (req, res) => {
  const { email, password } = req.query
  const response = loginService(email, password)
  res.json(response)
}

const signup = (req, res) => {
  res.send('signup ctrl')
}

const catList = (req, res) => {
  res.send('catList ctrl')
}

const liked = (req, res) => {
  res.send('like')
}

const unliked = (req, res) => {
  res.send('unlike')
}

const addInterest = (req, res) => {
  res.send('add interest')
}

const removeInterest = (req, res) => {
  res.send('remove interest')
}

const updatePreferences = (req, res) => {
  res.send('update Preferences')
}

module.exports = {
  login,
  signup,
  catList,
  liked,
  unliked,
  addInterest,
  removeInterest,
  updatePreferences
}
