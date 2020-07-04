import React from 'react';
import styled from 'styled-components';
import Container from '../../components/Container';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';

const Form = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
  align-items: center;
`;

const SplashConfiguration = () => {
  return (
    <Container>
      <Form>
        <p style={{ margin: '0.5rem 0 1rem 0' }}>Defina o link de sua API</p>
        <Input style={{ margin: '0 0 1rem 0' }} />
        <p style={{ margin: '0 0 1rem 0' }}>
          Escreva linha a linha seus recursos get
        </p>
        <TextArea />
        <Button style={{ margin: '1rem' }}>Confirmar</Button>
      </Form>
    </Container>
  );
};

export default SplashConfiguration;
