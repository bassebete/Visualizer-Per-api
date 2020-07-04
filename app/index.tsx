import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';
import { createGlobalStyle } from 'styled-components';
import Routes from './src/Routes';
import { history, configuredStore } from './src/stores/store';

const store = configuredStore();

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

const Global = createGlobalStyle`
  *{
    margin: 0;
    paddin: 0;
    box-sizing: border-box;
  }
`;

document.addEventListener('DOMContentLoaded', () =>
  render(
    <>
      <Global />
      <AppContainer>
        <Routes store={store} history={history} />
      </AppContainer>
    </>,
    document.getElementById('root')
  )
);
