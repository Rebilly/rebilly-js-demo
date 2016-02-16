var port = 3030;
var express = require('express');
var bodyParser = require('body-parser');
var serveStatic = require('serve-static');

var app = express();
// static content middleware
app.use(serveStatic(__dirname));
// post body middleware
app.use(bodyParser.urlencoded({extended: true}));

// listen to POST requests from the form at the root
app.post('/', function (request, response) {
    // when the token is received the client-side JS adds an input named 'rebillyToken'
    var tokenReceivedMsg = 'The form received sent via POST with payment token "'
        + request.body.rebillyToken + '".';
    // print confirmation to browser
    response.send(tokenReceivedMsg);
    // print the same message in the node console
    console.log(tokenReceivedMsg);
});

// start server on the desired port
app.listen(port, function () {
    // check node's console for this confirmation message
    console.log('Server now ready at "http://localhost:' + port + '"');
});
