// es6 各浏览器兼容
import 'babel-polyfill'

import React, { Component } from 'react'
import ReactDom from 'react-dom'

import configureStore from './store/configureStore.js'

import Root from './containers/Root'

const store = configureStore()
window['Store'] = store

require('./global')

ReactDom.render(
	<Root store={ store } />,
	document.getElementById('root')
)


console.log('ddd')