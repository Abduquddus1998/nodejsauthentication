const express = require('express');

const router = express.Router();

//Login Page
router.get('/login', (req,res) => res.render('login'));



router.get('/register', (req,res) => res.render('register'));
//Register Handle

router.post('/register',(req,res) => {
    console.log(req.body);
   const { name, email, password, password2} = req.body;
   let errors = [];
    
   //Check required fields
   if(!name || !email || !password || !password2){
       errors.push({msg: 'Please fill in all fields'});
   }

   //CHeck password
   if(password !== password2){
       errors.push({msg : "Passwords dont match"});
   }

   if(password.length < 6){
       errors.push({msg: 'Password should be at least 6'});
   }

   if(errors.length > 0){
    res.render('register', {
        errors,
        name,
        email,
        password,
        password2
    });
   }else{
       res.send('pass');
   }



});



//Register Page


module.exports = router;