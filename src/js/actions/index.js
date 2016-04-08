import Store from '../store'
import { bindActionCreators } from 'redux'

import * as Foo from './fooActionCreators.js'
import * as Bar from './barActionCreators.js'

const bindActionToDispatch = function(name, action) {
	Store[name+'Dispatch'] = bindActionCreators(action, Store.dispatch)
}

const actionList = [ Foo, Bar ]

actionList.forEach(action => {
	const name = action.name
	bindActionToDispatch(name, action)
})