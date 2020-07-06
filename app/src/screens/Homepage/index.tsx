import React from 'react';
import { VictoryChart, VictoryLine, VictoryAxis } from 'victory';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { BsFillGearFill } from 'react-icons/bs';
import Container from '../../components/Container';
import Button from '../../components/Button';
import constants from '../../constants/routes.json';

const GraphsWrapper = styled.div`
  display: flex;
  flex: 1;
`;

const GraphContainer = styled.div`
  width: 20rem;
  height: 13rem;
  background-color: #555555;
  position: relative;
  margin: 1rem;
`;

const Footer = styled.div`
  height: 3rem;
  display: flex;
  justify-content: flex-end;
`;

interface Values {
  x: number;
  y: number;
}

const Homepage = () => {
  const history = useHistory();

  React.useEffect(() => {
    function verifySplashed() {
      const splashed = localStorage.getItem('splashed');
      if (splashed === 'false' || !splashed)
        history.push(constants.SPLASH_CONFIGURATIONS);
    }

    verifySplashed();
  }, [history]);
  const resourceList = localStorage.getItem('resources')?.split('\n');
  let i = 0;
  return (
    <Container>
      <GraphsWrapper>
        {resourceList?.map((resource) => {
          i += 1;
          return <Graph key={resource} resource={resource} id={i} />;
        })}
      </GraphsWrapper>
      <Footer>
        <Button
          onClick={() => history.push(constants.CONFIGURATIONS)}
          style={{ height: '3rem', width: '8rem' }}
        >
          Configurar
        </Button>
      </Footer>
    </Container>
  );
};

function Graph({ resource, id }: { resource: string; id: number }) {
  const history = useHistory();
  const dispatch = useDispatch();

  React.useEffect(() => {
    function fetchDatas() {
      let origin = localStorage.getItem('origin');
      if (!origin) return;
      if (origin?.substr(origin.length - 1) !== '/') origin += '/';
      fetch(`${origin}${resource}`, {
        method: 'get',
      })
        .then((res) => res.json())
        .then((value) => {
          dispatch({ type: 'ADD_GRAPH', data: value });
          return value;
        })
        .catch(() => {});
    }

    fetchDatas();
  }, [dispatch, resource]);

  return (
    <GraphContainer>
      <VictoryChart>
        <VictoryAxis dependentAxis style={{ axis: { stroke: 'black' } }} />
        <VictoryAxis
          crossAxis
          style={{
            axis: { stroke: 'black' },
          }}
        />
        <VictoryLine
          style={{
            border: {
              stroke: 'red',
              fill: 'blue',
            },
            data: {
              stroke: 'black',
            },
          }}
          data={[]}
        />
      </VictoryChart>
      <BsFillGearFill
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
          cursor: 'pointer',
        }}
        onClick={() => history.push(`${constants.GRAPH_CONFIGURATIONS}${id}`)}
      />
    </GraphContainer>
  );
}

export default Homepage;
