var express = require('express');
var logger  = require('morgan');
var path    = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.set('PORT', process.env.PORT || 3001);

app.listen(app.get('PORT'), function(){
  console.log("server is running at: ", app.get('PORT'))
});
