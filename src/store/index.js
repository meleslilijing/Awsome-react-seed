import rootReducer from '../reducer'

// import thunk from './middleware/thunk'
import DevTools from '../containers/DevTools'

import { createStore, applyMiddleware, compose } from 'redux'
import { reduxReactRouter } from 'redux-router'
import { createHistory } from 'history'

const enhancer = compose(
	// applyMiddleware()
	reduxReactRouter({
		// routes,
		createHistory
	}), 
	DevTools.instrument()
)

const configureStore = function(initialState) {
	const store = createStore(rootReducer, initialState, enhancer)
	return store;
}

const Store = configureStore()

export default Store