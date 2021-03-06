var router = require('express').Router()
const authMiddleware = require('../middleware/verify-auth')
const {
  login, signup, catList,
  liked, unliked, addInterest,
  removeInterest, updatePreferences, autologin
} = require('./../controllers/catsController')

router.get('/login', login)
router.post('/signup', signup)
router.post('/autologin', authMiddleware, autologin)

router.get('/', authMiddleware, catList)
router.post('/liked', liked)
router.post('/unliked', unliked)
router.post('/interest', addInterest)
router.delete('/interest', removeInterest)
router.put('/preferences', authMiddleware, updatePreferences)

module.exports = router
