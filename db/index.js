const pg = require('pg');

const client = new pg.Client('postgres://localhost/zoocorp')
client.connect()ç
module.exports = client;