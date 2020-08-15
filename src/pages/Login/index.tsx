import React, { useCallback, FormEvent, useState } from 'react';

import Input from '../../components/Input';

import landing from '../../assets/images/landing.svg';
import success from '../../assets/images/success-background.svg';

import { Container, FormContainer, FormFooter } from './styles';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = useCallback(
    (eventSumit: FormEvent) => {
      eventSumit.preventDefault();
      console.log('submit');
      console.log(email, password);
    },
    [email, password],
  );

  return (
    <Container>
      <h1>Fazer login</h1>

      <FormContainer onSubmit={handleSubmit}>
        <Input
          label="E-mail"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <Input
          label="Senha"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

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
