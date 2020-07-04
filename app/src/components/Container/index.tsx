import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  color: white;
  height: 100vh;
  background-color: #222222;
  font-family: Arial, Helvetica, Helvetica Neue, serif;
  overflow-y: hidden;
  padding: 1rem;
`;

const Container = ({ children }: { children: ReactNode }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Container;
