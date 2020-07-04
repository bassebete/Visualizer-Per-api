import React from 'react';
import styled from 'styled-components';

const ButtonSC = styled.button`
  width: 30rem;
  height: 4rem;
  background-color: #343434;
  border: none;
  color: white;
  cursor: pointer;
  margin: ${(props) => props.style?.margin};
`;

const Button = ({ style }: { style?: React.CSSProperties }) => {
  return <ButtonSC style={style}>Confirmar</ButtonSC>;
};

export default Button;
