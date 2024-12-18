import React from 'react';

const BookList = ({ books }) => {
  return (
    <div className="books-container">
      {books.map((book) => (
        <div className="book-card" key={book._id}>
          <h3>{book.title}</h3>
          <p>Author: {book.author}</p>
          <p>Price: ${book.price}</p>
          <p>{book.description}</p>
          <img src={book.image} alt={book.title} />
        </div>
      ))}
    </div>
  );
};

export default BookList;
