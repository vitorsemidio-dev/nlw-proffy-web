import React, { useState, useCallback, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import Input from '../Login/Input';

import logoImg from '../../assets/images/logo.svg';

import {
  Container,
  BackgroundContent,
  BackgroundImage,
  DescriptionContainer,
  ContentForm,
  FormContainer,
} from './styles';

const Register: React.FC = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = useCallback(
    (eventSubmit: FormEvent) => {
      eventSubmit.preventDefault();
      api
        .post('/users', {
          name,
          lastname,
          email,
          password,
        })
        .then(() => {
          console.log('sucesso');
          history.push('/login');
        })
        .catch((_err) => {
          console.error('fail to create user');
        });
    },
    [name, lastname, email, password, history],
  );

  return (
    <Container>
      <ContentForm>
        <FormContainer onSubmit={handleSubmit}>
          <fieldset>
            <legend>
              Cadastro
              <span>Preencha os dados para cadastro</span>
            </legend>

            <Input
              fieldId="name"
              label="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              inputStyle={{
                borderTopRightRadius: 8,
                borderTopLeftRadius: 8,
              }}
            />

            <Input
              fieldId="lastname"
              label="Sobrenome"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />

            <Input
              fieldId="email"
              label="E-mail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              fieldId="password"
              label="Senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              inputStyle={{
                borderBottomRightRadius: 8,
                borderBottomLeftRadius: 8,
              }}
            />

            <button type="submit">Concluir cadastro</button>
          </fieldset>
        </FormContainer>
      </ContentForm>

      <BackgroundContent>
        <BackgroundImage>
          <DescriptionContainer>
            <img src={logoImg} alt="Logo" />
            <h2>Sua plataforma de estudos online</h2>
          </DescriptionContainer>
        </BackgroundImage>
      </BackgroundContent>
    </Container>
  );
};

export default Register;
