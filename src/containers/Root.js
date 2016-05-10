import React, { Component } from 'react'
import ReactDom from 'react-dom'

import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { ReduxRouter } from 'redux-router'

import Foo from '../components/Foo'
import Bar from '../components/Bar'

import App from './App'

import DevTools from './DevTools';

export default class Root extends Component {
	render() {
    return (
		<div>
  		<Provider store={Store}>
        <div>
          <ReduxRouter>
            <Route path="/" component={App}>
              <Route path="foo" component={Foo}></Route>
              <Route path="bar" component={Bar}></Route>
            </Route>
          </ReduxRouter>
          <DevTools />
        </div>
      </Provider>
		</div>
    );
  }
}