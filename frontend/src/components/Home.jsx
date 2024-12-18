import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to DC Bookstore</h1>
        <p>Your one-stop shop for the best books in town!</p>
      </header>

      <section className="featured-books">
        <h2>Featured Books</h2>
        <div className="featured-list">
          {/* Example static content for now */}
          <div className="featured-book">
            <img
              src="https://via.placeholder.com/150"
              alt="Book 1"
              className="featured-image"
            />
            <h3>Book Title 1</h3>
            <p>Author: Author Name</p>
          </div>

          <div className="featured-book">
            <img
              src="https://via.placeholder.com/150"
              alt="Book 2"
              className="featured-image"
            />
            <h3>Book Title 2</h3>
            <p>Author: Author Name</p>
          </div>

          <div className="featured-book">
            <img
              src="https://via.placeholder.com/150"
              alt="Book 3"
              className="featured-image"
            />
            <h3>Book Title 3</h3>
            <p>Author: Author Name</p>
          </div>
        </div>
      </section>

      <section className="about-us">
        <h2>About Us</h2>
        <p>
          DC Bookstore is a haven for book lovers, offering a wide range of books
          across genres. From fiction to non-fiction, we have something for everyone.
        </p>
      </section>
    </div>
  );
};

export default Home;
