var router = require('express').Router()

router.post('/login', (req, res) => res.send('Login'))
router.post('/signup', (req, res) => res.send('Signup'))
router.get('/list', (req, res) => res.send('list cats'))

module.exports = router
