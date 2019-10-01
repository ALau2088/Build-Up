const express = require('express');
const db = require('./database');

const app = express();

const PORT = 3000;

app.get('/api/products', (req, res) => {
  const result = {};
  db.query('SELECT * FROM products', (err, results) => {
    if (err) {
      throw err
    } else {
      result['products'] = results
      db.query('SELECT * FROM contacts', (err, results) => {
        if (err) {
          throw err
        } else {
          result['contacts'] = results
          res.send(result)
        }
      })
    }
  })
})

app.listen(PORT,()=> console.log(`Listening on port ${PORT}`))
