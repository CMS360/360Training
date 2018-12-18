const router = require('express').Router();
const usersController = require('../../controllers/usersController');

//Matches with '/api/users

router.route("/")
.get(usersController.all)
.post(usersController.create);


router
.route("/:id")
.get(usersController.getOne)
.put(usersController.update)
.delete(usersController.delete);

module.exports = router;