import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

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
  FieldAboutClass,
  FieldUser,
  FieldUserContact,
  FieldSchedule,
} from './styles';

const Profile: React.FC = () => {
  const [subject, setSubject] = useState('');

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

            <FieldUser>
              <Input name="name" label="Nome" value="Nome" />

              <Input name="lastname" label="Sobrenome" value="Sobrenome" />
            </FieldUser>

            <FieldUserContact>
              <Input name="email" type="email" label="E-mail" value="E-mail" />

              <Input name="whatsapp" type="tel" label="Whatsapp" value="123" />
            </FieldUserContact>

            <Textarea name="bio" label="Biografia" value="Biografia" />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>
            <FieldAboutClass>
              <Select
                name="subject"
                label="Matéria"
                optionTextDefault="Selecione uma matéria"
                value={subject}
                options={[
                  { value: 'Artes', label: 'Artes' },
                  { value: 'Biologia', label: 'Biologia' },
                  { value: 'Educação Física', label: 'Educação Física' },
                  { value: 'Filosofia', label: 'Filosofia' },
                  { value: 'Física', label: 'Física' },
                  { value: 'Informática', label: 'Informática' },
                  { value: 'História', label: 'História' },
                  { value: 'Matemática', label: 'Matemática' },
                  { value: 'Português', label: 'Português' },
                  { value: 'Química', label: 'Química' },
                  { value: 'Sociologia', label: 'Sociologia' },
                ]}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
              />

              <Input type="number" name="price" label="Preço" value="100" />
            </FieldAboutClass>
          </fieldset>

          <fieldset>
            <legend>Horários disponíveis</legend>

            <FieldSchedule>
              <Select
                name="week_day"
                label="Dia da semana"
                optionTextDefault="Selecione um dia"
                value="0"
                options={[
                  { value: '0', label: 'Domingo' },
                  { value: '1', label: 'Segunda-feira' },
                  { value: '2', label: 'Terça-feira' },
                  { value: '3', label: 'Quarta-feira' },
                  { value: '4', label: 'Quinta-feira' },
                  { value: '5', label: 'Sexta-feira' },
                  { value: '6', label: 'Sábado' },
                ]}
              />
              <Input name="from" type="time" label="Das" />
              <Input name="to" type="time" label="Até" />
            </FieldSchedule>
          </fieldset>
        </form>
      </FormContainer>
    </Container>
  );
};

export default Profile;
