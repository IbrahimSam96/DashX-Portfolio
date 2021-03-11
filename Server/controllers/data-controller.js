// bookshelf-app/server/controllers/books-controller.js

// Import database
const knex = require('./../db')

// Retrieve all books
exports.booksAll = async (req, res) => {
  // Get all books from database
  knex
    .select('*') // select all records
    .from('stocks') // from 'books' table
    .then(userData => {
      // Send books extracted from database in response
      res.json(userData)
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving books: ${err}` })
    })
}

// Create new book
exports.booksCreate = async (req, res) => {
  // Add new book to database
  knex('stocks')
    .insert({ // insert new record, a book
      "ticker": req.body.ticker,
      'date': req.body.date,
      'open': req.body.open,
      'close': req.body.close,
      'high': req.body.high,
      'last': req.body.last,
      'volume': req.body.volume,
    })
    .then(() => {
      // Send a success message in response
      res.json({ message: ` \'${req.body.ticker}\' added at ${req.body.date} created.` })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error creating ${req.body.ticker}  ${err}` })
    })
}

// Remove specific book
exports.booksDelete = async (req, res) => {
  // Find specific book in the database and remove it
  knex('stocks')
    .where('ticker', req.body.ticker) // find correct record based on id
    .del() // delete the record
    .then(() => {
      // Send a success message in response
      res.json({ message: `ticker ${req.body.ticker} deleted.` })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error deleting ${req.body.ticker} ticker: ${err}` })
    })
}

// Remove all books on the list
exports.booksReset = async (req, res) => {
  // Remove all books from database
  knex
    .select('*') // select all records
    .from('stocks') // from 'books' table
    .truncate() // remove the selection
    .then(() => {
      // Send a success message in response
      res.json({ message: 'stocks.' })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error resetting book list: ${err}.` })
    })
}