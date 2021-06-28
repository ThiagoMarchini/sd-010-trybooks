import React, { useState } from 'react';
import BookContext from './BookContext';

function BookProvider({ children }) {
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [booksByCategories, setBooksByCategories] = useState({
    fiction: [],
    action: [],
    juvenile: [],
  });
  const [filterText, setFilterText] = useState('');

  return (
    <BookContext.Provider
      value={ { filteredBooks, booksByCategories, filterText, setFilterText } }
    >
      {children}
    </BookContext.Provider>

  );
}

export default BookProvider;
