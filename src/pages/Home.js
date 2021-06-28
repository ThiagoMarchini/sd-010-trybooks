import React, { useContext } from 'react';
import Header from '../components/Header';
import BookList from '../components/BookList';
import BookContext from '../context/BookContext';
import FilteredList from '../components/FilteredList';

function Home() {
  const { filteredBooks } = useContext(BookContext);
  return (
    <>
      <Header />
      {
        filteredBooks?.length > 0
          ? <FilteredList filteredBooks={ filteredBooks } />
          : <BookList />
      }
    </>
  );
}

export default Home;
