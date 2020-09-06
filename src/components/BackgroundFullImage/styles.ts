import styled from 'styled-components';

import backgroundImage from '../../assets/images/Background.png';

export const Container = styled.div`
  background-color: #8257e5;
  width: 100%;
  height: 100vh;

  h1 {
    font: 700 3.6rem Archivo;
    line-height: 4.2rem;
    color: var(--color-title-in-primary);
  }

  h2 {
    font-weight: 500;
    font-size: 3.2rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
    color: var(--color-text-in-primary);
    max-width: 30rem;
  }
`;

export const DescriptionContainer = styled.div`
  max-width: 40rem;
`;

export const Image = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${backgroundImage}) no-repeat center;

  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
