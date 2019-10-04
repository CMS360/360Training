const router = require('express').Router();
const usersController = require('../../controllers/usersController');

//Matches with '/api/users

router.route("/")

.post(usersController.sales360Query)
.put(usersController.classic360Query)

module.exports = router;