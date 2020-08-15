import React from 'react';

import landing from '../../assets/images/landing.svg';
import success from '../../assets/images/success-background.svg';

const Login: React.FC = () => {
  return (
    <div>
      <h1>Login</h1>
      <div>
        <img src={landing} alt="Landing" />
        <img src={success} alt="success" />
      </div>
    </div>
  );
};

export default Login;
