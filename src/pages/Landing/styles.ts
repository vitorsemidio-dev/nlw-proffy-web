import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  height: 6.4rem;
  background-color: rgba(0, 0, 0, 0.1);
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

export const LogoutButton = styled.button`
  padding: 0.4rem;
  background-color: var(--color-primary-darker);
  img {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-text-in-primary);
  }
`;
