import React from 'react';
import styled from 'styled-components';

const TextAreaSC = styled.textarea`
  width: ${({ style }) => style?.width || '30rem'};
  height: ${({ style }) => style?.height || '30rem'};
  background-color: #343434;
  color: white;
  border: none;
  resize: none;
`;

const ContainerSC = styled.div`
  position: relative;
  width: ${({ style }) => style?.width || '30rem'};
  height: ${({ style }) => style?.height || '30rem'};
  margin: ${({ style }) => style?.margin};
`;

interface Props {
  style?: React.CSSProperties;
  readonly?: boolean;
  title?: string;
  body?: string;
}

const TextArea = ({ style, readonly, title, body }: Props) => {
  return (
    <ContainerSC style={style}>
      <TextAreaSC
        style={{ width: style?.width, height: style?.height }}
        maxLength={100}
        readOnly={readonly}
        title={title}
      />
      <p style={{ position: 'absolute', left: '40%', top: '5%' }}>{title}</p>
    </ContainerSC>
  );
};

export default TextArea;
