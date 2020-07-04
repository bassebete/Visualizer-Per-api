import React from 'react';
import styled from 'styled-components';

const TextAreaSC = styled.textarea`
  width: 30rem;
  height: 30rem;
  background-color: #343434;
  color: white;
  border: none;
  resize: none;
`;

const TextArea = () => {
  return <TextAreaSC maxLength={100} />;
};

export default TextArea;
