// es6 各浏览器兼容
import 'babel-polyfill'
import './global'

import React, { Component } from 'react'
import ReactDom from 'react-dom'

import Root from './containers/Root'

ReactDom.render(
	<Root />,
	document.getElementById('root')
)


