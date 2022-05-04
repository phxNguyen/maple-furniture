const express =require('express');
const router = express.Router();

// Controllers
const {createOrUpdateUser, currentUser} = require('../controllers/authController')

// Middlerwares
const {authCheck, adminCheck} = require('../middlewares/auth')

router.post('/create-or-update-user',  authCheck, createOrUpdateUser);
router.post('/current-user',  authCheck, createOrUpdateUser);
router.post("/current-admin", authCheck, adminCheck, currentUser);

module.exports = router;