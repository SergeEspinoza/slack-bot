const fetch = require("node-fetch");
var express = require('express');
var bodyParser = require('body-parser');
var luz=false;

var app = express();
var port = process.env.PORT || 1337;

// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// test route
app.get('/', function (req, res) { res.status(200).send('Hello world!'); });

app.listen(port, function () {
  console.log('Listening on port ' + port);
});

app.post('/meeting', function (req, res, next) {
if (!luz) {
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
luz=true;
} else {
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
luz=true;
}



});


/*
app.post('/turn-on-light', function (req, res, next) {
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

app.post('/turn-off-light', function (req, res, next) {
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

}); */
