import React, { useContext } from 'react';
import UserContext from '../context/UserContext';
import UserImage from '../img/user.png';
import SearchIcon from '../img/search.png';
import './Header.css';

function Header() {
  const { login } = useContext(UserContext);

  return (
    <header className="header-component">
      <div>
        <img src={ UserImage } alt="default user" />
        <span>{ login }</span>
      </div>
      <img src={ SearchIcon } alt="search icon" />
    </header>
  );
}

export default Header;
