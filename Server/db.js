
const path = require('path')


const dbPath = path.resolve(__dirname, 'Db/database.sqlite')


const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: dbPath,
  },
  useNullAsDefault: true
})


knex.schema
  .hasTable('stocks')
    .then((exists) => {
      if (!exists) {
        return knex.schema.createTable('stocks', (table)  => {
          table.string('ticker')
          table.date('date')
          table.integer('open')
          table.integer('close')
          table.integer('high')
          table.integer('last')
          table.integer('volume')
        })
        .then(() => {
         
          console.log('Table \'stocks\' created')
        })
        .catch((error) => {
          console.error(`There was an error creating table: ${error}`)
        })
      }
    })
    .then(() => {
      // Log success message
      console.log('Ayree')
    })
    .catch((error) => {
      console.error(`There was an error setting up the database: ${error}`)
    })


knex.select('*').from('stocks')
  .then(data => console.log('data:', data))
  .catch(err => console.log(err))


module.exports = knex
