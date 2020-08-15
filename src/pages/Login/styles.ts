import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    margin-bottom: 2rem;
  }
`;

export const FormContainer = styled.form`
  width: 40rem;
  display: flex;
  flex-direction: column;

  & > input {
    width: 100%;
  }

  button {
    width: 100%;
    height: 5.6rem;
    background-color: var(--color-secondary);
    border: 0;
    border-radius: 0.8rem;
    cursor: pointer;
    font: 700 1.6rem Archivo;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: background-color 0.2s;
  }
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
