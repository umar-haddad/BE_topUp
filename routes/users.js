//jalan masuk
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { validateUserInput } = require('../middlewares/inputValidation');

router.post('/create', validateUserInput, userController.createUser);
router.get('/:id', userController.getUserById);

module.exports = router;
