const express = require('express');
const path = require('path');
const app = express();
// const serveStatic = require('serve-static')
const routes = require('./routes/index');
const client = require('./db/index');
const PORT = 3000;


app.use('/index', routes);

// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));
// app.use('/static', express.static(__dirname + 'public'));
// app.use(serveStatic(path.join(__dirname, 'public')));

app.get('/', async(req, res) => {
  res.redirect('/index')
});

const server = app.listen(PORT, (err)=>{
  if(err) console.log(err);
  console.log('Server listening on PORT', PORT)
});