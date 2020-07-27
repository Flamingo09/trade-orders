import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Root from "./components/application/Root";

const singleSpaReactLifecycle = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root
})

export const bootstrap = singleSpaReactLifecycle.bootstrap;
export const mount = singleSpaReactLifecycle.mount;
export const unmount = singleSpaReactLifecycle.unmount;

let element = document.getElementById('trade-orders-module');
if(element && element.hasAttribute('isRenderedIndependently')) {
  ReactDOM.render(
    <Root />,
    element
  );
}
