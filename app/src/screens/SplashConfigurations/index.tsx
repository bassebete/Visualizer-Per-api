import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Container from '../../components/Container';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';
import constants from '../../constants/routes.json';

const Form = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
  align-items: center;
`;

const SplashConfiguration = () => {
  const history = useHistory();
  return (
    <Container>
      <Form>
        <p style={{ margin: '0.5rem 0 1rem 0' }}>Defina o link de sua API</p>
        <Input style={{ margin: '0 0 1rem 0' }} />
        <p style={{ margin: '0 0 1rem 0' }}>
          Escreva linha a linha seus recursos get
        </p>
        <TextArea style={{ height: '25rem', margin: '0 0 2rem 0' }} />
        <Button
          onClick={() => {
            localStorage.setItem('splashed', 'true');
            history.push(constants.HOME);
          }}
          style={{ margin: '1rem' }}
        >
          Confirmar
        </Button>
      </Form>
    </Container>
  );
};

export default SplashConfiguration;
