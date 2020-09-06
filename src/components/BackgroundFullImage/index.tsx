import React from 'react';

import { Container, Image, DescriptionContainer } from './styles';

interface BackgroundFullImageProps {
  title?: string;
  description: string;
  buttonText: string;
}

const BackgroundFullImage: React.FC<BackgroundFullImageProps> = ({
  title,
  description,
  buttonText,
}) => {
  return (
    <Container>
      <Image>
        <DescriptionContainer>
          <h1>{title}</h1>
          <h2>{description}</h2>

          <button type="button">{buttonText}</button>
        </DescriptionContainer>
      </Image>
    </Container>
  );
};

export default BackgroundFullImage;
