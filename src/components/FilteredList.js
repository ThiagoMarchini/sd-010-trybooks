import React from 'react';
import BookCard from './BookCard';

function FilteredList({ filteredBooks }) {
  return (
    <section className="filtered-list-component">
      <h3>Search</h3>
      <div className="filtered-book-list">
        { filteredBooks.map((book) => <BookCard key={ book } book={ book } />) }
      </div>
    </section>
  );
}

export default FilteredList;
