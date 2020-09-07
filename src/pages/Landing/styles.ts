import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logoutIcon from '../../assets/images/icons/logout.svg';

export const HeaderContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  height: 6.4rem;
  background-color: rgba(255, 255, 255, 0.1);
`;

export const ProfileInfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderContent = styled.header`
  margin: 0 auto;
  max-width: 110rem;
  background: transparent;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1100px) {
    width: 90vw;
    max-width: 70rem;
  }
`;

export const AvatarImage = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  margin-right: 1.6rem;
`;

export const UserName = styled.strong`
  font: 500 1.6rem Poppins;
  color: var(--color-text-in-primary);
`;

export const LogoutButton = styled(Link)`
  padding: 0.4rem;
  background-color: var(--color-primary-darker);
  width: 4rem;
  height: 4rem;
  border: 0;
  border-radius: 0.8rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
  text-decoration: none;

  &:hover {
    background-color: var(--color-primary-dark);
  }
`;

export const LogoutIcon = styled.img.attrs({
  src: logoutIcon,
  alt: 'Logout',
})`
  width: 1.6rem;
  height: 1.6rem;
  color: var(--color-text-in-primary);
`;
