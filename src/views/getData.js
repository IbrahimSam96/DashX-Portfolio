
// Import deps
import React, { useEffect, useState } from 'react';
import axios from 'axios';


// Create Bookshelf component
export const Bookshelf = () => {

  // Prepare states
   const [loading, setLoading] = useState(true)
   const [stock, setStock] = useState([])
   const [stockApi, setStockApi] = useState([])
   
  // Fetch all books on initial render
useEffect( () => {

fetchBooks();

  }, [])


// Get StockData & Store it in Database
  const fetchData = async ( ) => {
    const getit =  await getStockData();
    setStock(getit);
    handleBookCreate(getit);
    }

  //StockData
const getStockData = async  ()  => { 

     const data = await axios.get("http://api.marketstack.com/v1/intraday/latest?access_key=72ad8c2f489983f30aaedd0181414b43&symbols=AAPL" )
  .then( da => { 
     return da.data.data[0]
      
    } )
    return data
} 

  // Fetch all books
  const fetchBooks = async () => {
    // Send GET request to 'books/all' endpoint
    axios
      .get('http://localhost:4001/books/all')
      .then(response => {
        // Update the books state 
        setStockApi(response.data) 

        // Update loading state
        setLoading(false)
      })
      .catch(error => console.error(`There was an error retrieving the book list: ${error}`))
  }

  // Create new book
  const handleBookCreate =  (obj) => {
    // Send POST request to 'books/create' endpoint
  
    axios
      .post('http://localhost:4001/books/create',  
        {
            ticker: obj.symbol,
            date: obj.date,
            open: obj.open,
            close: obj.close,
            high: obj.high,
            last: obj.last,
            volume: obj.volume,
        }        
      )
      .then(res => {
        console.log(res.data)

        // Fetch all books to refresh
        // the books on the bookshelf list
        fetchBooks()
      })
      .catch(error => console.error(`There was an error creating the ${stock} book: ${error}`))
  }

 // Remove book
 const handleBookRemove = (id) => {
    // Send PUT request to 'books/delete' endpoint
    axios
      .put('http://localhost:4001/books/delete', { id: id })
      .then(() => {
        console.log(`stock ${stock} removed.`)

        // Fetch all books to refresh
        // the books on the bookshelf list
        fetchBooks()
      })
      .catch(error => console.error(`There was an error removing the ${stock} book: ${error}`))
  }


    // Reset book list (remove all books)
    const handleListReset = () => {
        // Send PUT request to 'books/reset' endpoint
        axios.put('http://localhost:4001/books/reset')
        .then(() => {
          // Fetch all books to refresh
          // the books on the bookshelf list
          fetchBooks()
        })
        .catch(error => console.error(`There was an error resetting the book list: ${error}`))
      }
    
  return (
    <div>
{console.log(stockApi)}
    </div>
  )
}