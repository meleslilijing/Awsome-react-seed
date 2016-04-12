# Awesome react seed
## Single Page Application in react
### keywords: react redux react-redux react-router redux-router

####TODO:

- add redux-devtools

####本地开发环境
	npm run dev

####开发规范
	https://github.com/airbnb/javascript/tree/master/react

####构建工具
- webpack
- babel
- babel-preset-es2015		for support es6	
- babel-polyfill			src/index.js入口文件内引用, 兼容部分浏览器不支持es6特性。

####dev server:
- express
- webpack-dev-middleware
- webpack-hot-middleware

####FE:
- react
- redux
- react-redux
- react-router
- redux-router

####Store放在全局变量(window)里 => 
1. 全局可触发action
	`
		Store.dispatch({
			type: "test-foo"
		})
	`

2. 相应的action也添加到了全局。对应的代码逻辑在 /actions/index.js, 每个actionCreator文件中必须添加 exprt name = 'action name'

		// actionCreators file
		export const name = 'foo'

		Store.fooDispatch.test()

3. 内部有子页面，记得写 `{ this.props.children}`。子页面参数通过参数传递，传递后的参数在  props.location中

		<Route path="foo" component={ Foo }>
			<Route path="bar" component={ Bar }></Route>
			<Route path="bar/:id" component={ Bar }></Route>
		</Route>

		// Foo
		class Foo extends React.Component {
			render() {
				return (
					<div>
						<p>Foo</p>
						{ this.props.children }
					</div>
				)
			}
		}

		// Bar
		class Bar extends React.Component {
			render() {
				return (
					<div>
						<p>Bar</p>
						<p>
							path: { this.props.path }
						</p>
					</div>
				)
			}
		}

不懂的技术直接去搜索相关文档

文件结构
	
	|-- /server					本地开发服务
	|-- /mock
	|-- /src 					未编译前端代码
	|-- /assert					上线前端代码

	|-- index.html 				编译后页面, 可能存在多个
	|-- package.json
	|-- webpack.config.js 		上线打包配置文件
	|-- webpack.dev.config.js 	开发环境配置，作为中间件在localServer中引用
	|-- .babelrc				babel配置文件，如果没有，可能写在webpack的相关配置中


src内部文件结构

	/src
	|- /css
	|- /scss
	|- /image
	|- /js
		|- /actions
		|- /components
		|- /constants			静态常量存储，如pageType等
		|- /containers			top components/page
		|- /global				全局func, object
		|- /reducer
		|- /store
	|- index.html 				未编译页面和js入口文件。可能存在多个
	|- index.js 				
