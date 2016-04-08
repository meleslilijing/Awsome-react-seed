import Store from '../store'
import '../actions'
import './String'

console.log(Store)

bindObjectToGlobal('Store', Store)

// 添加 对象为全局对象
// Object.assign的兼容目前使用 babel-polyfill, 有空自己实现。
function bindObjectToGlobal (name, value) {
	if( name && String.isString(name) ) {
		window[name] = value
	}
}
