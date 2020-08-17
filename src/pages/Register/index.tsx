import React, { useState } from 'react';

import logoImg from '../../assets/images/logo.svg';
import Input from '../Login/Input';

import {
  Container,
  BackgroundContent,
  BackgroundImage,
  DescriptionContainer,
  ContentForm,
  FormContainer,
} from './styles';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <BackgroundContent>
        <BackgroundImage>
          <DescriptionContainer>
            <img src={logoImg} alt="Logo" />
            <h2>Sua plataforma de estudos online</h2>
          </DescriptionContainer>
        </BackgroundImage>
      </BackgroundContent>

      <ContentForm>
        <FormContainer>
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
            />

            <button type="submit">Concluir cadastro</button>
          </fieldset>
        </FormContainer>
      </ContentForm>
    </Container>
  );
};

export default Register;
