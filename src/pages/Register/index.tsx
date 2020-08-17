import React from 'react';

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
        <FormContainer />
      </ContentForm>
    </Container>
  );
};

export default Register;
