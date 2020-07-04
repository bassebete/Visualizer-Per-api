/* eslint react/jsx-props-no-spreading: off */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import { History } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import routes from './constants/routes.json';
import Homepage from './screens/Homepage';
import Configurations from './screens/Configurations';
import GraphConfigurations from './screens/GraphConfigurations';
import SplashConfigurations from './screens/SplashConfigurations';
import { Store } from './stores/store';

type Props = {
  store: Store;
  history: History;
};

function Routes() {
  return (
    <Switch>
      <Route exact path={routes.HOME} component={Homepage} />
      <Route path={routes.CONFIGURATIONS} component={Configurations} />
      <Route
        path={routes.GRAPH_CONFIGURATIONS}
        component={GraphConfigurations}
      />
      <Route
        path={routes.SPLASH_CONFIGURATIONS}
        component={SplashConfigurations}
      />
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
