import React, { Component } from 'react';


class Search extends Component {
	constructor(props) {
		super(props)
		this.state = {
			filterName: "",
			nameAz: false
		}
	}

	onChange = (e) => {
		let obj = { filterName: e.target.value}
		this.setState({
			filterName: e.target.value
		})
		this.props.onFilterName(obj)
	}

	onSort = (e) => {
		let obj = { nameAz: !this.state.nameAz }
		this.setState({
			nameAz: !this.state.nameAz
		})
		this.props.onNameAz(obj)
	}

	render() {
		return (
			<div className="input-group">
				<div className="input-group-append">
					<button className="btn mybtnsearch btn-outline-secondary" type="button" disabled>
						<i className="fas fa-search"></i>
					</button>
				</div>
				<input type="text" className="form-control search" placeholder="Name" onChange={this.onChange} name={this.state.filterName} />
				<div className="input-group-append">
					<button className="btn mybtnsort btn-outline-secondary" type="button" onClick={this.onSort}>
						<i className={this.state.nameAz ? "fas fa-chevron-up" : "fas fa-chevron-down"}></i>
					</button>
				</div>
			</div>
		)
	}
}

export default Search;