import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';
import {
  HeaderContainer,
  HeaderContent,
  ProfileInfoContainer,
  AvatarImage,
  UserName,
  LogoutButton,
  LogoutIcon,
} from './styles';

interface Connection {
  total: number;
}

const Landing: React.FC = () => {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get<Connection>('/connections').then((response) => {
      const { total } = response.data;
      setTotalConnections(total);
    });
  }, [setTotalConnections]);

  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <ProfileInfoContainer to="/profile">
            <AvatarImage src="https://api.adorable.io/avatars/48/abott@adorable.png" />
            <UserName>Vitor Emidio</UserName>
          </ProfileInfoContainer>
          <LogoutButton to="/login">
            <LogoutIcon />
          </LogoutButton>
        </HeaderContent>
      </HeaderContainer>
      <div id="page-landing">
        <div id="page-landing-content" className="container">
          <div className="logo-container">
            <img src={logoImg} alt="Proffy" />

            <h2>Sua plataforma de estudos online</h2>
          </div>

          <img
            src={landingImg}
            alt="Plataforma de estudos"
            className="hero-image"
          />

          <div className="buttons-container">
            <Link to="/study" className="study">
              <img src={studyIcon} alt="Estudar" />
              Estudar
            </Link>
            <Link to="/give-classes" className="give-classes">
              <img src={giveClassesIcon} alt="Dar aulas" />
              Dar aulas
            </Link>
          </div>

          <span className="total-connections">
            Total de {totalConnections} conexões já realizadas{' '}
            <img src={purpleHeartIcon} alt="Coração Roxo" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Landing;
