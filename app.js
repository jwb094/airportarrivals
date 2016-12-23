const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const layouts = require('express-ejs-layouts');
const routes = require('./routes/displayPagesRoutes');
const airportsroutes = require('./routes/airportsDetailRoute');
const session = require("express-session");

app.set('view engine' , 'ejs');
app.use(layouts);

//middleware used
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));
app.use(session({secret:"Airportdetails",
                saveUninitialized: true,
                resave: true}));
app.use(routes);
app.use(airportsroutes);


app.listen(process.env.PORT || 3000, () => {
    console.log(`Server listening on port ${process.env.PORT || 3000}`);
});