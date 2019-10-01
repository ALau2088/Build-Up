const express = require('express');
const db = require('./database');
const bodyParser = require('body-parser')

const app = express();

const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }))

// Get products
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

// Get contacts
app.get('/api/contacts', (req, res) => {
  db.query('SELECT * FROM contacts WHERE productId = ?', [req.query.id], (err, results) => {
    if (err) {
      throw err
    } else {
      res.send(results)
    }
  })
})

app.listen(PORT,()=> console.log(`Listening on port ${PORT}`))
