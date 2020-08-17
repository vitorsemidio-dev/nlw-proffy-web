import React, { useCallback, FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import BackgroundImage from '../../components/BackgroundImage';
import InputForm from '../../components/InputForm';

import logoImg from '../../assets/images/logo.svg';
import purpleHeart from '../../assets/images/icons/purple-heart.svg';

import {
  Container,
  Content,
  FormContainer,
  Extra,
  InfoSignUp,
  InfoPrice,
  FormFooter,
  InputCheckbox,
  ForgotPassword,
} from './styles';

const Login: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = useCallback(
    (eventSumit: FormEvent) => {
      eventSumit.preventDefault();
      api
        .post('/sessions', {
          email,
          password,
        })
        .then(() => {
          console.log('sucesso');
          history.push('/');
        })
        .catch(() => {
          console.error('fail to login');
        });
    },
    [email, password, history],
  );

  return (
    <Container>
      <BackgroundImage text="Sua plataforma de estudos online" />

      <Content>
        <FormContainer onSubmit={handleSubmit}>
          <fieldset>
            <legend>Fazer login</legend>
            <InputForm
              label="E-mail"
              fieldId="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              inputStyle={{
                borderTopRightRadius: 8,
                borderTopLeftRadius: 8,
              }}
            />

            <InputForm
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
          </fieldset>
        </FormContainer>

        <Extra>
          <InfoSignUp>
            Não tem conta?
            <a href="/">Cadastre-se</a>
          </InfoSignUp>
          <InfoPrice>
            É de graça <img src={purpleHeart} alt="Ícone Coração Roxo" />
          </InfoPrice>
        </Extra>
      </Content>
    </Container>
  );
};

export default Login;
