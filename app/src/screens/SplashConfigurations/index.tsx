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
  const originInputRef = React.useRef<HTMLInputElement>(null);
  const resourcesTextAreaRef = React.useRef<HTMLTextAreaElement>(null);

  function handleSubmit() {
    localStorage.setItem('splashed', 'true');
    if (!originInputRef) return;
    if (!resourcesTextAreaRef) return;
    const { current: originInputElement } = originInputRef;
    const { current: resourcesTextAreaElement } = resourcesTextAreaRef;
    localStorage.setItem('origin', String(originInputElement?.value));
    localStorage.setItem('resources', String(resourcesTextAreaElement?.value));
    history.push(constants.HOME);
  }

  return (
    <Container>
      <Form>
        <p style={{ margin: '0.5rem 0 1rem 0' }}>
          Defina o link base de sua API
        </p>
        <Input style={{ margin: '0 0 1rem 0' }} ref={originInputRef} />
        <p style={{ margin: '0 0 1rem 0' }}>
          Escreva linha a linha seus recursos get
        </p>
        <TextArea
          style={{ height: '25rem', margin: '0 0 2rem 0' }}
          ref={resourcesTextAreaRef}
        />
        <Button onClick={handleSubmit} style={{ margin: '1rem' }}>
          Confirmar
        </Button>
      </Form>
    </Container>
  );
};

export default SplashConfiguration;
