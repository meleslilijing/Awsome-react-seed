import rootReducer from '../reducer'

import { createStore, applyMiddleware, compose } from 'redux'
import { reduxReactRouter } from 'redux-router'
import { createHistory } from 'history'

import DevTools from '../containers/DevTools'

let enhancer

// if(process.env.NODE_ENV === 'production ') {
	// const DevTools = require('../containers/DevTools');

    enhancer = compose(
		// applyMiddleware()
		reduxReactRouter({
			// routes,
			createHistory
		}),
		DevTools.instrument()
	)	
// }
// else {
// 	enhancer = compose(
// 		// applyMiddleware()
// 		reduxReactRouter({
// 			// routes,
// 			createHistory
// 		})
// 	)	
// }


export default function(initialState) {
	const store = createStore(rootReducer, initialState, enhancer)
	return store;
}