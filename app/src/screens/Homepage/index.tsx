import React from 'react';
import { VictoryChart, VictoryLine, VictoryAxis } from 'victory';
import styled from 'styled-components';
import { BsFillGearFill } from 'react-icons/bs';
import Container from '../../components/Container';
import Button from '../../components/Button';

const GraphsWrapper = styled.div`
  display: flex;
  flex: 1;
`;

const Graph = styled.div`
  width: 20rem;
  height: 14rem;
  background-color: #555555;
  position: relative;
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

type Data = Array<Values>;
type Datas = Array<Data>;

const Homepage = () => {
  const [datas] = React.useState<Datas>([
    [
      { x: 1, y: 2 },
      { x: 2, y: 3 },
      { x: 3, y: 5 },
      { x: 4, y: 4 },
      { x: 5, y: 7 },
    ],
  ]);

  return (
    <Container>
      <GraphsWrapper>
        <Graph>
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
              data={datas[0]}
            />
          </VictoryChart>
          <BsFillGearFill
            style={{
              position: 'absolute',
              top: 10,
              right: 10,
              cursor: 'pointer',
            }}
          />
        </Graph>
      </GraphsWrapper>
      <Footer>
        <Button style={{ height: '3rem', width: '8rem' }}>Configurar</Button>
      </Footer>
    </Container>
  );
};

export default Homepage;
