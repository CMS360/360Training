const router = require('express').Router()
const usersRoute = require('./usersRoute')

//routes
router.use('/users', usersRoute)

module.exports = router;