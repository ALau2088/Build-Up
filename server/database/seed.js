const productData = require('../../data/products.js')
const contactData = require('../../data/contacts.js')
const db = require('../database')

console.log(productData)

// seed products
for (let i = 0; i < productData.length; i++) {
  let queryStr = 'INSERT INTO products (productName, productDescription, productImage) value(?, ?, ?);';
  let product = [productData[i]['productName'], productData[i]['productDescription'], productData[i]['productImage']]
  db.query(queryStr,product, (err) => {
    if (err) {
      console.log(err)
    } else {
      let queryStr = 'INSERT INTO contacts (name, location, email, productId) value(?, ?, ?, ?);';
      let contact = [contactData[i]['name'], contactData[i]['location'], contactData[i]['email'],contactData[i]['productId']]
      db.query(queryStr,contact, (err) => {
        if (err) {
          console.log(err)
        } 
      })
    }
  })
}

// // seed contacts
// for (let i = 0; i < contactData.length; i++) {
//   let queryStr = 'INSERT INTO contacts (name, location, email, productId) value(?, ?, ?, ?);';
//   let contact = [contactData[i]['name'], contactData[i]['location'], contactData[i]['email'],contactData[i]['productId']]
//   db.query(queryStr,contact, (err) => {
//     if (err) {
//       console.log(err)
//     } 
//   })
// }

db.query('SELECT * FROM products;', (err, results) => {
  if (err) {
    console.log(err)
  } else {
    db.end()
  }
})

