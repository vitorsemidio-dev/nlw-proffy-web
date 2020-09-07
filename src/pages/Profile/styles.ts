import styled from 'styled-components';

import backgroundImage from '../../assets/images/success-background.svg';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 6.4rem;
  position: absolute;
  top: 0;
  background-color: transparent;
`;

export const HeaderContent = styled.header`
  max-width: 1100px;
  height: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: transparent;

  a {
    height: 3.2rem;
    transition: opacity 0.2s;
  }
  a:hover {
    opacity: 0.6;
  }

  img {
    height: 1.6rem;
  }

  strong {
    color: var(--color-title-in-primary);
  }
`;

export const SectionInfo = styled.section`
  width: 100%;
  height: 48rem;
  padding: 6.4rem;
  background-color: #8257e5;
  display: block;
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 1100px;
  background: url(${backgroundImage}) no-repeat center;
  background-size: cover;
`;

export const UserInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font: 700 3.6rem Archivo;
    color: var(--color-title-in-primary);
    margin: 3.2rem 0 1.6rem;
  }

  h2 {
    color: var(--color-text-in-primary);
    font: 500 2.4rem Poppins;
  }
`;

export const AvatarInput = styled.div`
  margin-bottom: 32px;
  position: relative;
  width: 186px;
  margin: 0 auto;

  align-self: center;

  > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  label {
    /* Position */
    position: absolute;
    right: 0;
    bottom: 0;

    /* Size */
    width: 48px;
    height: 48px;

    /* Styles */
    background: var(--color-secondary);
    border: 0;
    border-radius: 50%;
    cursor: pointer;

    /* Flex */
    display: flex;
    align-items: center;
    justify-content: center;

    /* Child */
    img {
      width: 3.2rem;
      height: 3.2rem;
      color: #312e38;
    }

    input {
      display: none;
    }

    /* Animation */
    transition: background-color 0.2s;

    &:hover {
      background-color: var(--color-secondary-dark);
    }
  }
`;

export const FormContainer = styled.main`
  background: var(--color-box-base);
  width: 100%;
  max-width: 74rem;
  border-radius: 0.8rem;
  margin: -3.2rem auto 3.2rem;
  padding: 6.4rem;

  fieldset {
    border: 0;
  }

  fieldset + fieldset {
    margin-top: 6.4rem;
  }

  legend {
    font: 700 2.4rem Archivo;
    color: var(--color-text-title);
    margin-bottom: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 1.6rem;
    border-bottom: 1px solid var(--color-line-in-white);
  }
`;

export const FieldAboutClass = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 3.2rem;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-row-gap: 1.2rem;
  }
`;

export const FieldUser = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 3.2rem;
  margin-bottom: 2.4rem;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-row-gap: 1.2rem;
    margin-bottom: 1.2rem;
  }
`;

export const FieldUserContact = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-column-gap: 3.2rem;
  margin-bottom: 2.4rem;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-row-gap: 1.2rem;
    margin-bottom: 1.2rem;
  }
`;

export const FieldSchedule = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-column-gap: 3.2rem;
  margin-bottom: 2.4rem;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-row-gap: 1.2rem;
    margin-bottom: 0;
  }
`;

export const ButtonAddNewSchedule = styled.button`
  background: none;
  border: 0;
  color: var(--color-primary);
  font: 700 1.6rem Archivo;
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: var(--color-primary-dark);
  }
`;

export const Footer = styled.footer`
  padding: 4rem 0rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    width: 20rem;
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
  }

  button:hover {
    background-color: var(--color-secondary-dark);
  }

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 2.4rem;
    font-size: 1.4rem;
    color: var(--color-text-complement);
  }

  p img {
    margin-right: 2rem;
  }
`;
