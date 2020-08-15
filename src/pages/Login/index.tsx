import React, { useCallback, FormEvent } from 'react';

import landing from '../../assets/images/landing.svg';
import success from '../../assets/images/success-background.svg';

import { Container, FormContainer, FormFooter } from './styles';

const Login: React.FC = () => {
  const handleSubmit = useCallback((eventSumit: FormEvent) => {
    eventSumit.preventDefault();
    console.log('submit');
  }, []);

  return (
    <Container>
      <h1>Fazer login</h1>

      <FormContainer onSubmit={handleSubmit}>
        <input type="email" id="email" />

        <input type="password" id="password" />

        <FormFooter>
          <input type="checkbox" name="Lembrar-me" id="remeber-me" />
          <a href="/">Esqueci minha senha</a>
        </FormFooter>

        <button type="submit">Entrar</button>
      </FormContainer>
    </Container>
  );
};

export default Login;
