import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import {
  Container,
  HeaderContainer,
  HeaderContent,
  SectionInfo,
  FormContainer,
} from './styles';

const Profile: React.FC = () => {
  return (
    <Container>
      <HeaderContainer>
        <HeaderContent>
          <Link to="/">
            <img src={backIcon} alt="Voltar" />
          </Link>
          <strong>Meu Perfil</strong>
          <img src={logoImg} alt="Proffy" />
        </HeaderContent>
      </HeaderContainer>
      <SectionInfo>Info</SectionInfo>

      <FormContainer>Form</FormContainer>
    </Container>
  );
};

export default Profile;
