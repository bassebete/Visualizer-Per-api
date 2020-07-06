import React from 'react';
import styled from 'styled-components';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
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
  const [datas, setDatas] = React.useState([]);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const { pathname } = useLocation();
  const selector = useSelector((state) => state.resources);
  const id = pathname.substr(pathname.lastIndexOf('/') + 1);

  const resourcesURI = localStorage.getItem('resources');

  let origin = localStorage.getItem('origin');
  if (origin?.substr(origin.length - 1 !== '/')) origin += '/';
  const actualResource = `${origin}${resourcesURI
    ?.split('\n')
    .find((v, index) => String(index + 1) === id)}`;

  React.useEffect(() => {
    if (selector) {
      setDatas(selector[id]);
    }
  }, [id, selector]);
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
            <Input style={{ width: '18rem', height: '3rem' }} ref={inputRef}>
              {actualResource}
            </Input>
            <Button
              style={{ width: '5rem', height: '3rem' }}
              onClick={() => {
                const resourceToFetch = inputRef.current?.value;

                fetch(String(resourceToFetch), {
                  method: 'GET',
                })
                  .then((res) => res.json())
                  .then((val) => setDatas(val.response))
                  .catch(() => {});
              }}
            >
              Preencher
            </Button>
          </div>
          <TextArea
            style={{ width: '25rem', height: '20rem' }}
            body={datas}
            readonly
          />
        </ResourceView>
        <TextArea
          style={{
            width: '15rem',
            height: '25rem',
            margin: '1rem',
          }}
          readonly
          keyType="X"
          title="Eixo X"
          body={datas}
        />
        <TextArea
          style={{ width: '15rem', height: '25rem', margin: '1rem' }}
          readonly
          title="Eixo Y"
          keyType="Y"
          body={datas}
        />
      </Form>
    </Container>
  );
};

export default GraphConfigurations;
