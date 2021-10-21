const express = require('express');
const app = express();
//required to grab the full directory path regardless of OS
const path = require('path');
//uses the public folder as static.
app.use(express.static('views'));
//sets the views folders where all the ejs templates are located
app.set('view engine', 'ejs');
//pulling in the blogpost collection
const BlogPost = require('./models/BlogPost');
mongoose.connect('mongodb://localhost/my_database',{useNewURLParser:true})
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.listen(port, () => {
    console.log("App is listening on port 8082");
});

let port = process.env.PORT; 

if (port == null || port == ""){
   port = 8082;
}

app.get('/', function(req,res){
  res.render('index.html');
});
