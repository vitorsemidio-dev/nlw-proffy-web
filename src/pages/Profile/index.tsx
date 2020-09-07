import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';
import cameraIcon from '../../assets/images/icons/camera.svg';

import {
  Container,
  HeaderContainer,
  HeaderContent,
  SectionInfo,
  AvatarInput,
  FormContainer,
} from './styles';

const Profile: React.FC = () => {
  const handleAvatarChange = useCallback(() => {
    console.log('handleAvatarChange');
  }, []);

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
      <SectionInfo>
        <AvatarInput>
          <img
            src="https://api.adorable.io/avatars/48/abott@adorable.png"
            alt="Avatar"
          />

          <label htmlFor="avatar">
            <img src={cameraIcon} alt="Camera Input" />
            <input type="file" id="avatar" onChange={handleAvatarChange} />
          </label>
        </AvatarInput>
      </SectionInfo>

      <FormContainer>Form</FormContainer>
    </Container>
  );
};

export default Profile;
