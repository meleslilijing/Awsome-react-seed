// es6 各浏览器兼容
import 'babel-polyfill'

import './js/global'

import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { ReduxRouter } from 'redux-router'

import Store from './js/store'
import App from './js/containers/App'
import Foo from './js/components/Foo'
import Bar from './js/components/Bar'

class Root extends Component {
	render() {
    return (
		<div>
      		<Provider store={Store}>
      			<ReduxRouter>
      				<Route path="/" component={App}>
      					<Route path="foo" component={Foo}>
      						<Route path="bar" component={Bar} />
      						<Route path="bar/:id" component={Bar} />
      					</Route>
      					<Route path="barrr" component={Bar}></Route>
      				</Route>
      			</ReduxRouter>
      		</Provider>
      		
		</div>
    );
  }
}

ReactDom.render(
	<Root />,
	document.getElementById('root')
)


