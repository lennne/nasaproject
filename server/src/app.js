const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const planetsRouter = require('./routes/planets.router');

const app = express();

const PORT = process.env.PORT || 8000;


//enable cors(cross origin) policy 
app.use(cors(
    {   
    origin: 'http://localhost:3000',  
}
));
app.use(morgan('combined'));

//process json from requests
app.use(express.json());

//api requests
app.use(planetsRouter); 

//serve files and folders in the public folder
app.use(express.static(path.join(__dirname,'..', 'public')));

module.exports = app;