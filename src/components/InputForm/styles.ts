import styled, { css } from 'styled-components';

interface ContainerProps {
  isFilled: boolean;
  isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  height: 5.6rem;
  width: 100%;

  &:focus-within::before {
    content: '';
    position: absolute;
    top: 0.8rem;
    left: 0;
    width: 0.2rem;
    height: calc(100% - 1.6rem);
    background-color: var(--color-primary-light);
  }

  input {
    height: 100%;
    width: 100%;
    height: 5.6rem;
    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    outline: 0;
    padding: 0 1.6rem;
    font: 1.6rem Archivo;
  }

  label {
    color: #ababab;
    position: absolute;
    transform-origin: 0% 0%;
    top: 50%;
    transform: translateY(-50%);
    left: 1.6rem;

    font-size: 1.8rem;
    font-style: normal;
    font-weight: 300;

    transition: 0.1s ease-in-out;
  }

  ${(props) =>
    props.isFocused &&
    css`
      label {
        top: 0;
        color: var(--color-primary-light);
        transform: scale(0.6);
      }
    `}

  ${(props) =>
    props.isFilled &&
    css`
      label {
        top: 0;
        transform: scale(0.6);
      }
    `}
`;
