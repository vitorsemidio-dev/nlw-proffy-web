import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
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
    width: 100%;
  }
`;
