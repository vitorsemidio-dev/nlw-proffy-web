import styled, { css } from 'styled-components';

interface ContainerProps {
  isFilled: boolean;
  isFocused: boolean;
  borderRadius?: 'bottom' | 'top' | undefined;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  height: 5.6rem;
  width: 100%;
  background-color: #afaddd;

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

    /* display: flex;
    align-items: center; */

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
        color: #ff9000;
        transform: scale(0.6);
        /* transform: scale(0.6) translateY(1.2rem); */
        /* border: 2px solid #ff9000; */
      }
    `}

  ${(props) =>
    props.isFilled &&
    css`
      label {
        top: 0;
        /* color: #ff9000; */
        transform: scale(0.6);
        /* transform: scale(0.6) translateY(1.2rem); */
      }
    `}

    ${(props) =>
      props.borderRadius === 'bottom' &&
      css`
        input {
          border-bottom-left-radius: 0.8rem;
          border-bottom-right-radius: 0.8rem;
        }
      `}
      ;

    ${(props) =>
      props.borderRadius === 'top' &&
      css`
        input {
          border-top-left-radius: 0.8rem;
          border-top-right-radius: 0.8rem;
        }
      `}
      ;
`;
