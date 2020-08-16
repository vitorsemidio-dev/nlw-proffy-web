import styled from 'styled-components';

import backgroundImage from '../../assets/images/success-background.svg';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
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
  /* flex: 1; */
  /* background-color: #8257e5; */
  width: 100%;
  height: 100vh;
  background: url(${backgroundImage}) no-repeat center;

  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 70rem;
  padding: 6.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* height: 100vh; */
`;

export const FormContainer = styled.form`
  width: 40rem;
  display: flex;
  flex-direction: column;

  fieldset {
    border: 0;
  }

  fieldset legend {
    margin-bottom: 4rem;
    font-size: 3.6rem;
  }

  & > input {
    width: 100%;
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

export const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.4rem;
`;

export const InputCheckbox = styled.label`
  vertical-align: middle;
  input {
    margin-right: 1rem;
  }
`;

export const ForgotPassword = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: var(--color-text-base);
  &:hover {
    color: var(--color-text-complement);
  }
`;
