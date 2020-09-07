import React from 'react';
// import { Link } from 'react-router-dom';

import {
  Container,
  Image,
  DescriptionContainer,
  ConfirmButton,
} from './styles';

interface BackgroundFullImageProps {
  title?: string;
  description: string;
  buttonText: string;
  redirectRouter?: string;
}

const BackgroundFullImage: React.FC<BackgroundFullImageProps> = ({
  title,
  description,
  buttonText,
  redirectRouter = '',
}) => {
  return (
    <Container>
      <Image>
        <DescriptionContainer>
          <h1>{title}</h1>
          <h2>{description}</h2>

          <ConfirmButton to={redirectRouter}>{buttonText}</ConfirmButton>
        </DescriptionContainer>
      </Image>
    </Container>
  );
};

export default BackgroundFullImage;
