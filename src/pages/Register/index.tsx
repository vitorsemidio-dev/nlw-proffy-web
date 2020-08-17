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
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </fieldset>
        </FormContainer>
      </ContentForm>
    </Container>
  );
};

export default Register;
