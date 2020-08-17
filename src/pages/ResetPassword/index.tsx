import React, { useState } from 'react';

import Input from '../Login/Input';

import BackgroundImage from '../../components/BackgroundImage';

import { Container, FormContainer, Form } from './styles';

const ResetPassword: React.FC = () => {
  const [token, setToken] = useState('');
  const [newPassword, setnewPassword] = useState('');
  const [newPasswordConfirmation, setnewPasswordConfirmation] = useState('');
  return (
    <Container>
      <BackgroundImage text="Tudo bem esquecer às vezes" />

      <FormContainer>
        <Form>
          <fieldset>
            <legend>Token</legend>

            <Input
              fieldId="token"
              label="Token"
              value={token}
              type="text"
              onChange={(e) => setToken(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Nova Senha</legend>

            <Input
              fieldId="new-password"
              label="Nova Senha"
              value={newPassword}
              onChange={(e) => setnewPassword(e.target.value)}
            />
            <Input
              fieldId="new-password-confirmation"
              label="Confirmação Senha"
              value={newPasswordConfirmation}
              onChange={(e) => setnewPasswordConfirmation(e.target.value)}
            />
          </fieldset>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default ResetPassword;
