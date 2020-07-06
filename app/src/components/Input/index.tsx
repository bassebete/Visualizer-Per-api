import React, { forwardRef } from 'react';
import styled from 'styled-components';

const InputSC = styled.input`
  width: ${({ style }) => style?.width || '30rem'};
  height: ${({ style }) => style?.height || '2rem'};
  background-color: #343434;
  border: none;
  color: white;
  margin: ${(props) => props.style?.margin};
`;

interface Props {
  style?: React.CSSProperties;
  children?: string;
}

const Input = forwardRef(
  ({ style, children }: Props, ref: React.Ref<HTMLInputElement>) => {
    return (
      <InputSC ref={ref} type="text" style={style} defaultValue={children} />
    );
  }
);

Input.displayName = 'SomeInput';
export default Input;
