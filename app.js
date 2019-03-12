const fetch = require("node-fetch");
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

/*
app.post('/encender-luz', function (req, res, next) {
  fetch("https://maker.ifttt.com/trigger/encenderFoco/with/key/d2gEXI2jzz6CNGYc66_W8i", {mode: 'no-cors'})
.then(function(response) {
  console.log('Request successful',response);
  var userName = req.body.user_name;
  var botPayload = {
    text : 'Hello ' + userName + ', light on.'
  };
  // Loop otherwise..
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
}).catch(function(error) {
  console.log('Request failed', error)
});

});

app.post('/apagar-luz', function (req, res, next) {
  fetch("https://maker.ifttt.com/trigger/apagarFoco/with/key/d2gEXI2jzz6CNGYc66_W8i", {mode: 'no-cors'})
.then(function(response) {
  console.log('Request successful',response);
  var userName = req.body.user_name;
  var botPayload = {
    text : 'Hello ' + userName + ', light off.'
  };
  // Loop otherwise..
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
}).catch(function(error) {
  console.log('Request failed', error)
});

});*/

app.post('/', function (req, res, next) {
  var userName = req.body.user_name;
  let payload=req.body;
  var botPayload = {
    text : 'Hello ' + userName + ', welcome to Devdactic Slack channel! I\'ll be your guide.'
  };

  if (payload.event.text === "botluz") {
      if (payload.event.text.includes("encender-luz")) {
          // Make call to chat.postMessage using bot's token
          fetch("https://maker.ifttt.com/trigger/encenderFoco/with/key/d2gEXI2jzz6CNGYc66_W8i", {mode: 'no-cors'})
        .then(function(response) {
          console.log('Request successful',response);
        }).catch(function(error) {
          console.log('Request failed', error)
        });
      }
      if (payload.event.text.includes("apagar-luz")) {
          // Make call to chat.postMessage using bot's token
          fetch("https://maker.ifttt.com/trigger/apagarFoco/with/key/d2gEXI2jzz6CNGYc66_W8i", {mode: 'no-cors'})
        .then(function(response) {
          console.log('Request successful',response);
        }).catch(function(error) {
          console.log('Request failed', error)
        });
      }

  }

  // Loop otherwise..
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
});
