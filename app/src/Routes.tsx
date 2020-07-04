/* eslint react/jsx-props-no-spreading: off */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import { History } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import routes from './constants/routes.json';
import GraphConfigurations from './screens/GraphConfigurations';
import { Store } from './stores/store';

type Props = {
  store: Store;
  history: History;
};

function Routes() {
  return (
    <Switch>
      <Route path={routes.HOME} component={GraphConfigurations} />
    </Switch>
  );
}

const Root = ({ store, history }: Props) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>
);

export default hot(Root);
