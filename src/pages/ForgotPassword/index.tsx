import React, { useState } from 'react';

import Input from '../Login/Input';

import BackgroundImage from '../../components/BackgroundImage';

import { Container, ContentForm, FormContainer } from './styles';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  return (
    <Container>
      <BackgroundImage text="Sua plataforma de estudos online" />

      <ContentForm>
        <FormContainer>
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
