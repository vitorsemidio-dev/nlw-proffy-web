import React, { useCallback, FormEvent, useState } from 'react';

import Input from '../../components/Input';
import InputPassword from '../../components/InputPassword';

import landing from '../../assets/images/landing.svg';
import success from '../../assets/images/success-background.svg';

import { Container, FormContainer, FormFooter } from './styles';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const name = 'name';
  const label = 'label';

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
        <InputPassword label="Campo 1" fieldId="id1" />

        <InputPassword label="Campo 2" fieldId="id2" />

        <InputPassword label="Campo 3" fieldId="id3" />

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

        <div className="input-block">
          <label htmlFor="name">{label}</label>
          <input type="text" id="name" />
        </div>

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
