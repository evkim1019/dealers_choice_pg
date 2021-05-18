const express = require('express');
const app = express();
const routes = require('./routes/index')
const client = require('./db/index');
const PORT = 3000;

app.use('/index', routes);

app.get('/', async(req, res) => {
  res.redirect('/index')
});

const server = app.listen(PORT, (err)=>{
  if(err) console.log(err);
  console.log('Server listening on PORT', PORT)
});