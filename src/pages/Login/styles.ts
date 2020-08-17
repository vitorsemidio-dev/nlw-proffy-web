import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 58rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FormContainer = styled.form`
  width: 40rem;
  display: flex;
  flex-direction: column;

  fieldset {
    border: 0;
  }

  fieldset legend {
    color: var(--color-text-title);
    font: 700 3.6rem Poppins;
    margin-bottom: 4rem;
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

export const Extra = styled.div`
  width: 100%;
  max-width: 40rem;
  margin-top: 10rem;
  display: flex;
  justify-content: space-between;
`;

export const InfoSignUp = styled.div`
  a {
    display: block;
    text-decoration: none;
    color: var(--color-primary);
  }
`;

export const InfoPrice = styled.div``;
