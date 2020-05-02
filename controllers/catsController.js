const loginService = require('../services/cats/login')
const signupService = require('../services/cats/signup')
const addInterestService = require('../services/cats/add-interest')

const login = (req, res) => {
  const { email, password } = req.query
  const response = loginService(email, password)
  res.json(response)
}

const signup = async (req, res) => {
  const cat = req.body
  const response = await signupService(cat)
  res.json(response)
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

const addInterest = async (req, res) => {
  const { catId, interestId } = req.body
  const response = await addInterestService(catId, interestId)
  res.json(response)
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
