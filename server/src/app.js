const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const planetsRouter = require('./routes/planets.router');
const launchRouter = require('./routes/launches.router');

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

//serve files and folders in the public folder
app.use(express.static(path.join(__dirname,'..', 'public')));

//api requests
app.use('/planets',planetsRouter); 
app.use('/launch',launchRouter);

app.get('/{*splat}', function(req, res){
    console.log(req.url);
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})



module.exports = app;