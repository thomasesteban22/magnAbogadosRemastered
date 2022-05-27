const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')
const routes = require('./routes/index.js');

//setings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//routes
app.use(require('./routes/index'));


//static files
app.use(express.static(path.join(__dirname, 'public')));

//server-on
app.listen(app.get('port'), () =>{
    console.log('SERVIDOR ENCENDIDO: PUERTO:', app.get('port'));
});
