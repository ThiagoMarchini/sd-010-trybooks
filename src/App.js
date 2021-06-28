import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BookProvider from './context/BookProvider';
import UserProvider from './context/UserProvider';
import Login from './pages/Login';
import Home from './pages/Home';
import Library from './pages/Library';

import './App.css';
import './custom.scss';

function App() {
  return (
    <BookProvider>
      <UserProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={ Login } />
            <Route path="/" component={ Home } />
            <Route path="/library" component={ Library } />
          </Switch>
        </BrowserRouter>
      </UserProvider>
    </BookProvider>
  );
}

export default App;
