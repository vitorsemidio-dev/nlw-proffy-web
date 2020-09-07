import React from 'react';

import BackgroundFullImage from '../../ui/BackgroundFullImage';

const SuccessResetPassword: React.FC = () => {
  return (
    <BackgroundFullImage
      title="Redefinição enviada!"
      description="Boa, agora é só checar o e-mail que foi enviado para você, redefinir sua senha e aproveitar os estudos"
      buttonText="Voltar ao login"
      redirectRouter="/login"
    />
  );
};

export default SuccessResetPassword;
