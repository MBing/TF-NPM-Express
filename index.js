var connect = require('connect'),
	basicAuth = require('basicAuth'),
	express = require('express'),
    port = 9000;

var app = express();

app.use(function(req, res, next){
  console.log('hello from the middleware!');
  next();
});

app.use(function(req, res, next){
  console.log('doing async stuff...');
  setTimeout(function(){
    console.log('done!');
    next();
  }, 1000);
});

app.get('/', function(req, res){ res.send('get request'); });
app.post('/', function(req, res){ res.send('post request'); });
app.put('/', function(req, res){ res.send('put request'); });
app.patch('/', function(req, res){ res.send('patch request'); });
app.delete('/', function(req, res){ res.send('delete request'); });

app.get('/:name', function(req, res){
  res.send("hello, " + req.params.name)
});

app.listen(port, function(){
  console.log('listening on port ' + port);
});