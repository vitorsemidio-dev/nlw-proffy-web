import React, { useState, useCallback, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import BackgroundImagem from '../../components/BackgroundImage';
import ButtonForm from '../../components/ButtonForm';
import InputForm from '../../components/InputForm';

import { Container, Form, FormContainer } from './styles';

const Register: React.FC = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = useCallback(
    (eventSubmit: FormEvent) => {
      eventSubmit.preventDefault();
      api
        .post('/users', {
          name,
          lastname,
          email,
          password,
        })
        .then(() => {
          console.log('sucesso');
          history.push('/login');
        })
        .catch((_err) => {
          console.error('fail to create user');
        });
    },
    [name, lastname, email, password, history],
  );

  return (
    <Container>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <fieldset>
            <legend>
              Cadastro
              <span>Preencha os dados para cadastro</span>
            </legend>

            <InputForm
              fieldId="name"
              label="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              inputStyle={{
                borderTopRightRadius: 8,
                borderTopLeftRadius: 8,
              }}
            />

            <InputForm
              fieldId="lastname"
              label="Sobrenome"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />

            <InputForm
              fieldId="email"
              label="E-mail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <InputForm
              fieldId="password"
              label="Senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              inputStyle={{
                borderBottomRightRadius: 8,
                borderBottomLeftRadius: 8,
              }}
            />

            <ButtonForm type="submit">Concluir cadastro</ButtonForm>
          </fieldset>
        </Form>
      </FormContainer>

      <BackgroundImagem
        title="Torne-se um Proffy"
        text="Conexe-se a maior plataforma de estudos online"
      />
    </Container>
  );
};

export default Register;
