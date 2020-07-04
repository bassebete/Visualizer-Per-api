import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { RiArrowGoBackLine } from 'react-icons/ri';
import Container from '../../components/Container';
import Button from '../../components/Button';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import constants from '../../constants/routes.json';

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
  const history = useHistory();

  return (
    <Container>
      <RiArrowGoBackLine
        style={{
          position: 'absolute',
          top: 5,
          left: 5,
          fontSize: '1.5rem',
          cursor: 'pointer',
        }}
        onClick={() => history.push(constants.HOME)}
      />
      <Form>
        <ResourceView>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              margin: '1rem',
              width: '25rem',
            }}
          >
            <Input style={{ width: '18rem', height: '3rem' }} />
            <Button style={{ width: '5rem', height: '3rem' }}>Preencher</Button>
          </div>
          <TextArea style={{ width: '25rem', height: '20rem' }} />
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
