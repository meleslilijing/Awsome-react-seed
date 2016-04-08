import rootReducer from '../reducer'
import { createStore, compose } from 'redux'
import { reduxReactRouter } from 'redux-router'
import { createHistory } from 'history'

const Store  = compose(
	reduxReactRouter({ createHistory })
)(createStore)(rootReducer)

export default Store