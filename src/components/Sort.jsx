import React, { Component } from 'react';


class Sort extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filterType: "0",
            typeIn: false
        }
    }

    onChoose = (e) => {
        let obj = {filterType: e.target.name }
        this.setState({
            filterType: e.target.name
        })
        this.props.onFilterType(obj)
    }
    
    onSort = (e) => {
        let obj = { typeIn: !this.state.typeIn }
        this.setState({
            typeIn: !this.state.typeIn
        })
        this.props.onTypeIn(obj)
    }

    render() {
        return (
            <div>
                <div className="dropdown">
                    <button className="btn btn-outline-light dropdown-toggle status" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        <b>
                            {this.state.filterType === "0" ? "All" : this.state.filterType === "1" ? "Important" : "Not Important"}
                        </b>
                    </button>
                    <div className="dropdown-menu mydrop" aria-labelledby="triggerId">
                        <a className="dropdown-item bg-success text-light" name={0} onClick={this.onChoose}>All</a>
                        <a className="dropdown-item bg-warning" name={1} onClick={this.onChoose}>Important</a>
                        <a className="dropdown-item bg-info text-light" name={-1} onClick={this.onChoose}>Not Important</a>
                    </div>
                    <div className="inline">
                        <button className="btn mybtnsort btn-outline-secondary" type="button" onClick={this.onSort}>
                            <i className={this.state.typeIn ? "fas fa-chevron-up" : "fas fa-chevron-down"}></i>
                        </button>
                    </div>
                </div>

            </div>
        )
    }
}

export default Sort;