import React from 'react';

import logoImg from '../../assets/images/logo.svg';

import { Container, Image, DescriptionContainer } from './styles';

interface BackgroundImageProps {
  type?: 'side' | 'full';
  title?: string;
  text: string;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ text, title }) => {
  return (
    <Container>
      <Image>
        <DescriptionContainer>
          {title ? <h1>{title}</h1> : <img src={logoImg} alt="Logo" />}
          <h2>{text}</h2>
        </DescriptionContainer>
      </Image>
    </Container>
  );
};

export default BackgroundImage;
