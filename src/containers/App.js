import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { push } from 'redux-router'

class App extends Component {
	constructor(props) {
		super(props)

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick() {
		Store.barDispatch.test({
			type: 'test-bar'
		})
	}
	
	render() {
		const links = [
			{ pathname: '/', display: '/'},
			{ pathname: '/foo', display: '/foo'},
			{ pathname: '/bar', display: '/bar'}
		]

		return (
			<div id="App" onClick={ this.handleClick }>
				{
					links.map((link, index)=>{
						return (
							<p key={ index }>
								<Link to={ link }>{link.display}</Link>
							</p>
						)
					})
				}
				{ JSON.stringify(this.props.bar) }

				{ this.props.children }
			</div>
		) 
	}
}

// Store与App绑定。Store中的state变化，才会重新render <App>
function mapStateToProps(state) {
	return {
		foo: state.foo,
		bar: state.bar
	}
}

export default connect(mapStateToProps)(App)
