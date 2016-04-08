import React, { Component } from 'react'

export default class Bar extends Component {
	constructor(props) {
		super(props)
		console.log(this.props.query)
		debugger
	}

	render() {
		const { query } = this.props.location;

		const queryStr = query ? 'query: '+JSON.stringify(query) : '';

		return (
			<div>
				Bar
				{ queryStr }
			</div>
		)
		
	}
}