const API_URL = 'https://www.googleapis.com/books/v1/volumes';

function fetchBooks(query) {
  return fetch(`${API_URL}?q=${query}&printType=books`)
    .then((res) => res.json());
}

export default fetchBooks;
