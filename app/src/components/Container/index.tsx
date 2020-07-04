import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  color: white;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  background-color: #232c39;
  font-family: Arial, Helvetica, Helvetica Neue, serif;
  overflow-y: hidden;
  padding: 1rem;
`;

const Container = ({ children }: { children: ReactNode }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Container;
