import React, { useState, useCallback, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import Input from '../Login/Input';

import BackgroundImage from '../../components/BackgroundImage';

import { Container, ContentForm, FormContainer } from './styles';
import api from '../../services/api';

const ForgotPassword: React.FC = () => {
  const history = useHistory();

  const [email, setEmail] = useState('');

  const handleSubmit = useCallback(
    (eventSubmit: FormEvent) => {
      eventSubmit.preventDefault();
      api
        .post('/password/forgot', {
          email,
        })
        .then(() => {
          console.log('sucesso');
          history.push('/reset-password');
        })
        .catch((_err) => {
          console.error('fail to reset password');
        });
    },
    [history, email],
  );
  return (
    <Container>
      <BackgroundImage text="Sua plataforma de estudos online" />

      <ContentForm>
        <FormContainer onSubmit={handleSubmit}>
          <fieldset>
            <legend>
              Eita, esqueceu sua senha?
              <span>Não esquenta, vamos dá um jeito nisso.</span>
            </legend>

            <Input
              fieldId="email"
              type="email"
              label="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button type="submit">Enviar</button>
          </fieldset>
        </FormContainer>
      </ContentForm>
    </Container>
  );
};

export default ForgotPassword;
