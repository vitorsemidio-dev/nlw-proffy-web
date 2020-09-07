import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';
import cameraIcon from '../../assets/images/icons/camera.svg';

import {
  Container,
  HeaderContainer,
  HeaderContent,
  SectionInfo,
  AvatarInput,
  BackgroundImage,
  UserInfoContainer,
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
        <BackgroundImage>
          <UserInfoContainer>
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
            <h1>Nome Usuario</h1>
            <h2>Materia</h2>
          </UserInfoContainer>
        </BackgroundImage>
      </SectionInfo>

      <FormContainer>
        <form>
          <fieldset>
            <legend>Seus Dados</legend>

            <Input name="name" label="Nome" value="Nome" />

            <Input name="lastname" label="Sobrenome" value="Sobrenome" />

            <Input name="email" type="email" label="E-mail" value="E-mail" />

            <Input name="whatsapp" type="tel" label="Whatsapp" value="123" />
          </fieldset>
        </form>
      </FormContainer>
    </Container>
  );
};

export default Profile;
