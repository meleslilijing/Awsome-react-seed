import { combineReducers } from 'redux'
import { routerStateReducer } from 'redux-router'

const initTodoState = {
	testTodoInit: "test-foo-init"
}

const initCounterState = ['test-bar-init']

// 数据流
export function foo ( state = initTodoState, action ) {
	const { type } = action

	switch( type ) {
		case "test-foo":
			return Object.assign({}, state, {testTodo: "test-foo"});
		default:
			return state;
	}
}

// 其他 例如屏幕尺寸设置等
export function bar ( state = initCounterState, action ) {
	const { type } = action

	switch( type ) {
		case "test-bar":
			// 不能直接改变state的值
			return state.concat(["Bar!"])
		default:
			return state;
	}
}

export default combineReducers({
	foo: foo, 
	bar: bar,
	router: routerStateReducer
})

