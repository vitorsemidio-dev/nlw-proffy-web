import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const FormContainer = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 58rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 40rem;

  display: flex;
  flex-direction: column;

  fieldset {
    border: 0;
    & + fieldset {
      margin-top: 40px;
    }

    legend {
      color: var(--color-text-title);
      font: 700 3.6rem Poppins;
      span {
        margin-bottom: 0.8rem;
        display: block;
        color: var(--color-text-base);
        font: 500 1.6rem Poppins;
      }
    }
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
