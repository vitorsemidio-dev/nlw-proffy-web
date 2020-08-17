import React, { useState, useCallback, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import Input from '../Login/Input';

import BackgroundImage from '../../components/BackgroundImage';

import { Container, FormContainer, Form } from './styles';

const ResetPassword: React.FC = () => {
  const history = useHistory();
  const [token, setToken] = useState('');
  const [newPassword, setnewPassword] = useState('');
  const [newPasswordConfirmation, setnewPasswordConfirmation] = useState('');

  const handleSubmit = useCallback(
    (eventSubmit: FormEvent) => {
      eventSubmit.preventDefault();
      api
        .post('/password/reset', {
          token,
          newPassword,
          newPasswordConfirmation,
        })
        .then(() => {
          console.log('sucesso');
          history.push('/login');
        })
        .catch((_err) => {
          console.error('fail to reset');
        });
    },
    [token, newPassword, newPasswordConfirmation, history],
  );

  return (
    <Container>
      <BackgroundImage text="Tudo bem esquecer às vezes" />

      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <fieldset>
            <legend>
              Token
              <span>Informe o token que enviamos para seu e-mail</span>
            </legend>

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

          <button type="submit">Salvar nova senha</button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default ResetPassword;
