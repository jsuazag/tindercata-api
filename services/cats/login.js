
const login = (email, password) => {
  if (email === 'nieves@gmail.com' && password === '123') {
    return {
      status: 1,
      token: 'YYY-ZZZ-PPP'
    }
  }
  return {
    status: 2
  }
}

module.exports = login
