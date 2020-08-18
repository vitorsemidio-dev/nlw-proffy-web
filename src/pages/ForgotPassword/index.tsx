import React, { useState, useCallback, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import InputForm from '../../components/InputForm';
import ButtonForm from '../../components/ButtonForm';

import BackgroundImage from '../../components/BackgroundImage';

import { Container, FormContainer, Form } from './styles';
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
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <fieldset>
            <legend>
              Eita, esqueceu sua senha?
              <span>Não esquenta, vamos dá um jeito nisso.</span>
            </legend>

            <InputForm
              fieldId="email"
              type="email"
              label="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              inputStyle={{
                borderRadius: 8,
              }}
            />

            <ButtonForm type="submit">Enviar</ButtonForm>
          </fieldset>
        </Form>
      </FormContainer>

      <BackgroundImage
        title="Deu um branco?"
        text="Até os melhores Proffys às vezes esquecem sua senha"
      />
    </Container>
  );
};

export default ForgotPassword;
