import styled from 'styled-components';
import { Link } from 'react-router-dom';

import backgroundImage from '../../assets/images/Background.png';

export const Container = styled.div`
  background-color: #8257e5;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

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
  width: 80%;
  height: 80vh;
  max-width: 120rem;
  max-height: 80rem;
  background: url(${backgroundImage}) no-repeat center;

  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ConfirmButton = styled(Link)`
  /* width:  */
  height: 5.6rem;
  background: var(--color-secondary);
  color: var(--color-button-text);
  border: 0;
  border-radius: 0.8rem;
  cursor: pointer;
  font: 700 1.6rem Archivo;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: background-color 0.2s;
  margin-top: 3.2rem;
`;
