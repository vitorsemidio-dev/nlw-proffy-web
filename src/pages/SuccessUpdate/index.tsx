import React from 'react';

import BackgroundFullImage from '../../ui/BackgroundFullImage';

const SuccessUpdate: React.FC = () => {
  return (
    <BackgroundFullImage
      title="Atualização concluída"
      description="Agora os demais usuário poderão visualizar seus dados atualizados. Fique de olho para novos contatos."
      buttonText="Dashboard"
      redirectRouter="/"
    />
  );
};

export default SuccessUpdate;
