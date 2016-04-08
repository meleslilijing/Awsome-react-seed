import React, { Component } from 'react'

export default class Foo extends Component {
	constructor(props) {
		super(props)
	}

	render() {

		return (
			<div onClick={ this.handleClick }>
				I am Foo!

				{ this.props.children }
			</div>
		)	
	}
	
}