const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')
const PORT = process.env.PORT || 3001

const app = express();

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  } 

//Config body parser for AJAX request
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
//Server static files
app.use(express.static("client/build"))
// Add routes, both API and view

app.use(routes)


app.listen(PORT, function(){
    console.log(`API Server now listening on PORT ${PORT} `);
})