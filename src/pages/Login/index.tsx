import React, { useCallback, FormEvent } from 'react';

import landing from '../../assets/images/landing.svg';
import success from '../../assets/images/success-background.svg';

import { Container } from './styles';

const Login: React.FC = () => {
  const handleSubmit = useCallback((eventSumit: FormEvent) => {
    eventSumit.preventDefault();
    console.log('submit');
  }, []);

  return (
    <Container>
      <h1>Fazer login</h1>

      <form onSubmit={handleSubmit}>
        <div className="inputs-form">
          <input type="email" id="email" />
          <input type="password" id="password" />
        </div>

        <div className="footer">
          <input type="checkbox" name="Lembrar-me" id="remeber-me" />
          <a href="/">Esqueci minha senha</a>
        </div>

        <button type="submit">Entrar</button>
      </form>
    </Container>
  );
};

export default Login;
