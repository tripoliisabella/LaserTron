const express = require('express');
const bodyParser = require('body-parser');
const { response } = require('express');
const app = express();
const router = express.Router();
const path = __dirname + '/views/';
const port = 8080;

const urlEncodedParser = bodyParser.urlencoded({ extended: true }); 
const bodyParserJson = bodyParser.json();

router.use(function (req,res,next) {
  console.log('/' + req.method);
  next();
});

router.get('/', function(req,res){
  res.sendFile(path + 'index.html');
  res.end();
});

/* router.post('/', urlEncodedParser, function(req,res){
    if(!req.body){
        return res.sendStatus(400);
    }
  req.body.result_mils = (req.body.mm*5000)/127;
  //res.send('<p>Your result is: ' +  req.body.result_mils+'</p><a href="/views/index.html">back</a>');
  //document.getElementByName('result_mils').value =  req.body.result_mils;
  console.log(req.body);
  res.sendFile(path + 'index.html', {data: req.body.mm = 5});

}); */

app.use(express.static(path));
app.use('/', router);

app.listen(port, function () {
  console.log('App listening on port 8080!')
})