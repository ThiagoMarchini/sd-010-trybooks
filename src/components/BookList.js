import React, { useContext } from 'react';
import BookContext from '../context/BookContext';
import BookCard from './BookCard';

function BookList() {
  const { booksByCategories } = useContext(BookContext);

  return (
    <ul>
      {Object.entries(booksByCategories).map(([category, books]) => (
        <>
          <h3>{ category }</h3>
          {books.map((book) => <BookCard key={ book } book={ book } />)}
        </>
      ))}
    </ul>
  );
}

export default BookList;
