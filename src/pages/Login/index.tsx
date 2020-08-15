import React, { useCallback, FormEvent, useState } from 'react';

import Input from '../../components/Input';
import InputPassword from '../../components/InputPassword';

import landing from '../../assets/images/landing.svg';
import success from '../../assets/images/success-background.svg';

import {
  Container,
  FormContainer,
  FormFooter,
  InputCheckbox,
  ForgotPassword,
} from './styles';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

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
        <InputPassword
          inputStyle={{
            borderTopRightRadius: 8,
            borderTopLeftRadius: 8,
          }}
          label="E-mail"
          fieldId="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputPassword
          label="Senha"
          fieldId="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          inputStyle={{
            borderBottomRightRadius: 8,
            borderBottomLeftRadius: 8,
          }}
        />

        <FormFooter>
          <InputCheckbox htmlFor="remeber-me">
            <input
              checked={rememberMe}
              onChange={(_e) => setRememberMe(!rememberMe)}
              type="checkbox"
              name="Lembrar-me"
              id="remeber-me"
            />
            Lembrar-me
          </InputCheckbox>
          <ForgotPassword href="/">Esqueci minha senha</ForgotPassword>
        </FormFooter>

        <button type="submit">Entrar</button>
      </FormContainer>
    </Container>
  );
};

export default Login;
