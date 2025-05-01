const path = require('path');
const express = require('express');
const cors = require('cors');

const planetsRouter = require('./routes/planets.router');

const app = express();

const PORT = process.env.PORT || 8000;

app.use(cors(
    {   
    origin: 'http://localhost:3000',  
}
));
app.use(express.json());
app.use(planetsRouter); 
app.use(express.static(path.join(__dirname,'..', 'public')));

module.exports = app;