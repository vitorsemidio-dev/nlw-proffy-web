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
`;

export const DescriptionContainer = styled.div`
  max-width: 60rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font: 700 5.4rem Archivo;
    line-height: 4.2rem;
    color: var(--color-title-in-primary);
  }

  h2 {
    font-weight: 500;
    font-size: 1.6rem;
    margin-top: 0.8rem;
    color: var(--color-text-in-primary);
    text-align: center;
    max-width: 50rem;
  }
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
  padding: 2.4rem;
`;
