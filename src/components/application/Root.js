import React, {Component} from 'react';
import {AppContainer} from 'react-hot-loader';
import {render} from 'react-dom';
import configureStore, {history} from '../../redux/store/configureStore';
import './../../styles/styles.scss';
import WrapperApp from "./WrapperApp";

require('./../../favicon.ico');

const store = configureStore();

const domElement = document.getElementById('trade-orders-module');

export default class Root extends Component {
  render() {
    return (
      <AppContainer>
        <WrapperApp basename={this.props}/>
      </AppContainer>
    );
  }
}

if(domElement) {
  render(
    <AppContainer>
      <WrapperApp />
    </AppContainer>,
    domElement
  );
}

if (module.hot) {
  module.hot.accept('./WrapperApp', () => {
    const NewRoot = require('./WrapperApp').default;
    render(
      <AppContainer>
        <NewRoot/>
      </AppContainer>,
      domElement
    );
  });
}
