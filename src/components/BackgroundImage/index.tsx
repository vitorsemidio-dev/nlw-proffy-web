import React from 'react';

import logoImg from '../../assets/images/logo.svg';

import { Container, Image, DescriptionContainer } from './styles';

interface BackgroundImageProps {
  type: 'side' | 'full';
  title: string;
  text: string;
}

const BackgroundImage: React.FC = () => {
  return (
    <Container>
      <Image>
        <DescriptionContainer>
          <img src={logoImg} alt="Logo" />
          <h2>Sua plataforma de estudos online</h2>
        </DescriptionContainer>
      </Image>
    </Container>
  );
};

export default BackgroundImage;
