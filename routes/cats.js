var router = require('express').Router()
const { login, signup, catList } = require('./../controllers/catsController')

router.get('/login', login)
router.post('/signup', signup)
router.get('/list', catList)

module.exports = router
