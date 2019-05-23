const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mogoose = require('mongoose');
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

//Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;
 
app.listen(PORT, console.log(`Server started on Port ${PORT}`));