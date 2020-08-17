import styled from 'styled-components';

import backgroundImage from '../../assets/images/success-background.svg';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
`;

export const BackgroundContent = styled.div`
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

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${backgroundImage}) no-repeat center;

  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ContentForm = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 58rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FormContainer = styled.form`
  width: 100%;
  max-width: 40rem;

  display: flex;

  flex-direction: column;

  fieldset {
    border: 0;

    legend {
      color: var(--color-text-title);
      font: 700 3.6rem Poppins;
      span {
        margin-top: 1.6rem;
        margin-bottom: 3.2rem;

        display: block;
        color: var(--color-text-base);
        font: 500 1.6rem Poppins;
        max-width: 16rem;
      }
    }
  }

  & > input {
    width: 100%100%;
  }

  button {
    width: 100%;
    height: 5.6rem;
    background-color: var(--color-secondary);
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
    margin-top: 4rem;
  }
`;
