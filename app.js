const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mogoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');

const app = express();

//DB Config
const db = require('./config/keys.js').MongoURI;
 

//Connect to Mongo
mogoose.connect(db, {useNewUrlParser: true})
.then(() => console.log("Connected")) 
.catch(err => console.log(err));


//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

//Body Parser
app.use(express.urlencoded({extended : false}));

//Express  Session
app.use(session({
    
        secret: 'secret',
        resave: true,
        saveUninitialized: true   
}))

//Connect Flash
app.use(flash());

//Global variable
app.use((req,res, next) => {
    res.locals.success_msg = req.flash('succes_msg');
    res.locals.error_msg = req.flash('error_msg');
    next();
});

//Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;
 
app.listen(PORT, console.log(`Server started on Port ${PORT}`));