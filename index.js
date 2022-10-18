const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')
const routes = require('./src/routes');

//setings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//routes
app.use(require('./src/routes'));


//static files
app.use(express.static(path.join(__dirname, 'src/public')));

//server-on
app.listen(app.get('port'), () =>{
    console.log('SERVIDOR ENCENDIDO: PUERTO:', app.get('port'));
});
