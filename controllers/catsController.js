
const login = (req, res) => {
  res.send('login ctrl')
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
