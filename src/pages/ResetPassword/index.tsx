import React, { useState, useCallback, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import InputForm from '../../components/InputForm';
import ButtonForm from '../../components/ButtonForm';
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
      <BackgroundImage text="Queremos você conosco de novo" />

      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <fieldset>
            <legend>
              Token
              <span>Informe o token que enviamos para seu e-mail</span>
            </legend>

            <InputForm
              fieldId="token"
              label="Token"
              value={token}
              type="text"
              onChange={(e) => setToken(e.target.value)}
              inputStyle={{
                borderRadius: 8,
              }}
            />
          </fieldset>

          <fieldset>
            <legend>Nova Senha</legend>

            <InputForm
              fieldId="new-password"
              label="Nova Senha"
              value={newPassword}
              onChange={(e) => setnewPassword(e.target.value)}
              inputStyle={{
                borderTopRightRadius: 8,
                borderTopLeftRadius: 8,
              }}
            />
            <InputForm
              fieldId="new-password-confirmation"
              label="Confirmação Senha"
              value={newPasswordConfirmation}
              onChange={(e) => setnewPasswordConfirmation(e.target.value)}
              inputStyle={{
                borderBottomRightRadius: 8,
                borderBottomLeftRadius: 8,
              }}
            />
          </fieldset>

          <ButtonForm type="submit">Salvar nova senha</ButtonForm>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default ResetPassword;
