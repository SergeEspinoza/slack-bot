var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 1337;

// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// test route
app.get('/', function (req, res) { res.status(200).send('Hello world!'); });

app.listen(port, function () {
  console.log('Listening on port ' + port);
});

app.post('/hello', function (req, res, next) {
  var userName = req.body.user_name;
  var botPayload = {
    text : 'Hello ' + userName + ', welcome to IWA Slack channel! I\'ll be your guide.'
    open ("https://maker.ifttt.com/trigger/encenderFoco/with/key/d2gEXI2jzz6CNGYc66_W8i")
  };
  // Loop otherwise..
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
});

app.post('/encender-luz', function (req, res, next) {
  var userName = req.body.user_name;
  var botPayload = {
    text : 'Hello ' + userName + ', luces encendidas.'
    open ("https://maker.ifttt.com/trigger/encenderFoco/with/key/d2gEXI2jzz6CNGYc66_W8i")
  };
  // Loop otherwise..
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
});
