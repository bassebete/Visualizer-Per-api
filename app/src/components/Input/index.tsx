import React from 'react';
import styled from 'styled-components';

const InputSC = styled.input`
  width: 30rem;
  height: 2rem;
  background-color: #343434;
  border: none;
  color: white;
  margin: ${(props) => props.style?.margin};
`;

const Input = ({ style }: { style: React.CSSProperties }) => {
  return <InputSC type="text" style={style} />;
};

export default Input;
