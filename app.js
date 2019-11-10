require('./config/config');
require('./models/db');
 
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const path = require('path');
const tableRoutes = require('./routes/TableController');
const menuRoutes = require('./routes/MenuController');

const rtsIndex = require('./routes/index.router');
 
var app = express();

var corsOptions = {
    credentials: true, origin: true
   }
  

// middleware
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(passport.initialize());
app.use('/api', rtsIndex);
app.use('/api/tables',tableRoutes);
app.use('/api/menu',menuRoutes);

 
app.use('/api/imgs', express.static(path.join(__dirname, "assets","imeges")));
    



 app.listen('http://10.10.4.223:3000/api/',process.env.PORT, () => console.log(`Server started at port: ${process.env.PORT}`))

//  const port=3000;
//  app.listen(port, function(){
//     console.log("Server running on localhost:" + port);
// })
