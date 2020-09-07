import React from 'react';

import BackgroundFullImage from '../../components/BackgroundFullImage';

const Success: React.FC = () => {
  return (
    <BackgroundFullImage
      title="Redefinição enviada!"
      description="Boa, agora é só checar o e-mail que foi enviado para você, redefinir sua senha e aproveitar os estudos"
      buttonText="Voltar ao login"
      redirectRouter="/login"
    />
  );
};

export default Success;
