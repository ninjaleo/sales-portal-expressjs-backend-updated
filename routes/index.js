const express = require('express')

const { validateUser, signupUser,saveQuote, getQuotes, getUser } = require('../controllers')


const router = express.Router()

router.use('/login', validateUser)
router.use('/signup', signupUser)
router.use('/createQuote', saveQuote)
router.use('/getQuotes', getQuotes)
router.use('/user', getUser)
// router.use('/user/:email', deleteUser)



module.exports = router