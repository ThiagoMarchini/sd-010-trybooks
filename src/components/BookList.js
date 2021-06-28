import React, { useContext } from 'react';
import BookContext from '../context/BookContext';
import BookCard from './BookCard';

function BookList() {
  const { booksByCategories } = useContext(BookContext);

  return (
    <div>
      { Object.entries(booksByCategories).map(([category, books]) => (
        <>
          <h3>{ category }</h3>
          <div className="book-list">
            { books.map((book) => <BookCard key={ book } book={ book } />) }
          </div>
        </>
      )) }
    </div>
  );
}

export default BookList;
