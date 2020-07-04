import React from 'react';
import styled from 'styled-components';
import Container from '../../components/Container';
import Button from '../../components/Button';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';

const Form = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;
`;

const ResourceView = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

const GraphConfigurations = () => {
  return (
    <Container>
      <Form>
        <ResourceView>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              margin: '1rem',
              width: '30rem',
            }}
          >
            <Input style={{ width: '20rem', height: '3rem' }} />
            <Button style={{ width: '5rem', height: '3rem' }}>Preencher</Button>
          </div>
          <TextArea style={{ width: '30rem', height: '20rem' }} />
        </ResourceView>
        <TextArea
          style={{
            width: '15rem',
            height: '25rem',
            margin: '1rem',
          }}
          readonly
          title="Eixo X"
        />
        <TextArea
          style={{ width: '15rem', height: '25rem', margin: '1rem' }}
          readonly
          title="Eixo Y"
        />
      </Form>
    </Container>
  );
};

export default GraphConfigurations;
