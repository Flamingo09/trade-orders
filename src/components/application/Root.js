import React, {Component} from 'react';
import {ConnectedRouter} from 'connected-react-router';
import {AppContainer} from 'react-hot-loader';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore, {history} from '../../store/configureStore';
import App from './App';
import './../../styles/styles.scss';

require('./../../favicon.ico');

const store = configureStore();

export default class Root extends Component {
  render() {
    return (
      <AppContainer>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <App/>
          </ConnectedRouter>
        </Provider>
      </AppContainer>
    );
  }
}

if (module.hot) {
  module.hot.accept('./Root', () => {
    const NewRoot = require('./Root').default;
    let element = document.getElementById('trade-orders-module');
    if(element.getAttribute('isRenderedIndependently')) {
      render(
        <NewRoot />,
        element
      );
    }
  });
}
