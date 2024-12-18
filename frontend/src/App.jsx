import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './components/Home'; // Import Home component
import './App.css';

const App = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    price: '',
    description: '',
    image: '',
  });

  // Fetch books from the backend
  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('https://books-backend-1-ubrl.onrender.com/api/books');
      setBooks(response.data);
    } catch (err) {
      console.error('Error fetching books:', err);
    }
  };

  // Add a new book
  const addBook = async () => {
    try {
      await axios.post('https://books-backend-1-ubrl.onrender.com/api/books', newBook);
      fetchBooks(); // Refresh the book list
      setNewBook({ title: '', author: '', price: '', description: '', image: '' }); // Reset form
    } catch (err) {
      console.error('Error adding book:', err);
    }
  };

  return (
    <div className="app">
      {/* Home Page */}
      <Home />

      {/* Add Book Section */}
      <section className="form-container">
        <h2>Add a New Book</h2>
        <div className="form-group">
          <input
            type="text"
            placeholder="Title"
            value={newBook.title}
            onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Author"
            value={newBook.author}
            onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
          />
          <input
            type="number"
            placeholder="Price"
            value={newBook.price}
            onChange={(e) => setNewBook({ ...newBook, price: e.target.value })}
          />
          <textarea
            placeholder="Description"
            value={newBook.description}
            onChange={(e) => setNewBook({ ...newBook, description: e.target.value })}
          ></textarea>
          <input
            type="text"
            placeholder="Image URL"
            value={newBook.image}
            onChange={(e) => setNewBook({ ...newBook, image: e.target.value })}
          />
          <button onClick={addBook}>Add Book</button>
        </div>
      </section>

      {/* Display Books Section */}
      <section className="books-container">
        <h2>Available Books</h2>
        <div className="books-list">
          {books.length === 0 ? (
            <p>No books available. Add some!</p>
          ) : (
            books.map((book) => (
              <div className="book-card" key={book._id}>
                <img src={book.image} alt={book.title} className="book-image" />
                <h3>{book.title}</h3>
                <p><strong>Author:</strong> {book.author}</p>
                <p><strong>Price:</strong> ${book.price}</p>
                <p>{book.description}</p>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default App;
