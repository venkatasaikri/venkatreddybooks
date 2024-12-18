import React, { useState } from 'react';
import axios from 'axios';

const BookForm = ({ refreshBooks }) => {
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    price: '',
    description: '',
    image: '',
  });

  const addBook = async () => {
    try {
      await axios.post('https://books-backend-1-ubrl.onrender.com/api/books', newBook);
      refreshBooks();
      setNewBook({ title: '', author: '', price: '', description: '', image: '' });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="form-container">
      <h2>Add a Book</h2>
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
  );
};

export default BookForm;
