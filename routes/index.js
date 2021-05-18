const express = require('express');
const router = express.Router();
const client = require('../db');
const animalList = require('../views/animalList');
const animalDetails = require('../views/animalDetails');

router.get('/', async(req, res) => {
  try{
    const data = await client.query('SELECT * FROM zoo');
    res.send(animalList(data.rows));
  } catch(error){console.log(error)}
});

router.get('/:id', async(req, res) => {
  try{
    const data = await client.query('SELECT * FROM zoo WHERE zoo.id = $1', [req.params.id]);
    console.log(data.rows[0]);
    res.send(animalDetails(data.rows[0]));
  } catch(error){console.log(error)}
});

module.exports = router;