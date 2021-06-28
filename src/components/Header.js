import React, { useContext, useEffect, useState } from 'react';
import FormControl from 'react-bootstrap/formcontrol';
import UserContext from '../context/UserContext';
import BookContext from '../context/BookContext';
import UserImage from '../img/user.png';
import SearchIcon from '../img/search.png';
import './Header.css';

function Header() {
  const { login } = useContext(UserContext);
  const { filterBooks } = useContext(BookContext);
  const [showFilterInput, toggleFilterInput] = useState(false);
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    filterBooks(filterText);
  }, [filterText]);

  return (
    <header className="header-component">
      { showFilterInput
        ? (
          <FormControl
            value={ filterText }
            onChange={ (ev) => setFilterText(ev.target.value) }
            aria-describedby="inputGroup-sizing-sm"
          />)
        : (
          <div>
            <img src={ UserImage } alt="default user" />
            <span>{ login }</span>
          </div>
        )}
      <button onClick={ () => toggleFilterInput((previous) => !previous) } type="button">
        <img src={ SearchIcon } alt="search icon" />
      </button>
    </header>
  );
}

export default Header;
