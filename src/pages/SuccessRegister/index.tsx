import React from 'react';

import BackgroundFullImage from '../../ui/BackgroundFullImage';

const SuccessRegister: React.FC = () => {
  return (
    <BackgroundFullImage
      title="Cadastro concluído"
      description="Agora você faz parte da plataforma Proffy. Tenha uma ótima experiência."
      buttonText="Fazer Login"
      redirectRouter="/login"
    />
  );
};

export default SuccessRegister;
