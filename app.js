const express = require('express');
const app = express();
//required to grab the full directory path regardless of OS
const path = require('path');
//uses the public folder as static.
app.use(express.static('views'));
//sets the views folders where all the ejs templates are located
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
let port = process.env.PORT; 
app.listen(port, () => {
    console.log("App is listening on port 8082");
});



if (port == null || port == ""){
   port = 8082;
}

app.get('/', function(req,res){
  res.render('index.html');
});
