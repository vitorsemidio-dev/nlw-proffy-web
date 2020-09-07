import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  /* background-color: rgba(255, 255, 255, 0.1); */
  background-color: transparent;
`;

export const HeaderContent = styled.header`
  max-width: 1100px;
  height: 6.4rem;
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
  height: 64rem;
  background-color: #8257e5;
  display: block;
`;

export const FormContainer = styled.main``;
