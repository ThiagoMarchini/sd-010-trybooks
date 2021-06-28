import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/form';
import Button from 'react-bootstrap/button';
import TrybooksLogo from '../img/logo.png';
import './Login.css';
import UserContext from '../context/UserContext';
import { useHistory } from 'react-router';

/** Source: https://react-bootstrap.netlify.app/components/forms/#forms */
function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const { successLogin } = useContext(UserContext);
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();

    successLogin(login, password);
    history.push('/');
  }

  return (
    <main className="login-page">
      <img src={ TrybooksLogo } alt="logo" />
      <Form onSubmit={ handleSubmit }>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={ login }
            onChange={ (ev) => setLogin(ev.target.value) }
            data-testid="email-input"
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            {'We\'ll never share your email with anyone else.'}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          {/* deu certo UUUHUU grande Zambs mestre do Regex */}
          <Form.Control
            value={ password }
            onChange={ (ev) => setPassword(ev.target.value) }
            type="password"
            placeholder="Password"
            pattern="[0-9a-zA-Z]{6,}"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </main>
  );
}

export default Login;
