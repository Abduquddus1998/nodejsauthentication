const express = require('express');

const router = express.Router();

//Login Page
router.get('/login', (req,res) => res.render('login'));

//Register Page


module.exports = router;