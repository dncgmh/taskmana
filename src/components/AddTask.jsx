import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/MainActions';
class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            status: true,
            add: false
        }
    }

    onHandleAdd = (e) => {
        this.setState({
            add: !this.state.add
        })
    }

    onChange = (e) => {
        this.setState({
            name: e.target.value,
        })
    }

    onHandleDrop = (e) => {
        this.setState({
            status: !this.state.status
        })
    }

    onHandleSave = () => {
        let obj = {
            name: this.state.name,
            status: this.state.status
        }
        this.setState({
            name: "",
            status: true,
            add: false
        })
        this.props.onAddTask(obj)
    }

    onHandleEraser = () => {
        this.setState({
            name: ""
        })
    }

    render() {
        let { name, status, add } = this.state;
        return (
            <tr>
                <th scope="row">
                </th>
                <td>
                    <div className="input-group mb-3" hidden={!add}>
                        <input className="form-control item borderadd"
                            name="name" value={name} onChange={this.onChange} />
                        <div className="input-group-append">
                            <button className="btn mybtn btn-outline-secondary" type="button" onClick={this.onHandleEraser}>
                                <i className="fas fa-eraser"></i>
                            </button>
                        </div>
                    </div>
                </td>
                <td>
                    <div className="dropdown mydropdown" hidden={!add}>
                        <button className={status ? "btn dropdown-toggle btn-warning" : "btn dropdown-toggle  btn-info"} type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                            {status ? "Important" : "Not Important"}
                        </button>
                        <div className="dropdown-menu mydrop" aria-labelledby="triggerId">
                            <a
                                className={status ? "bg-info dropdown-item text-light" : "bg-warning dropdown-item"}
                                onClick={this.onHandleDrop}
                            >
                                {status ? "Not Important" : "Important"}
                            </a>
                        </div>
                    </div>
                </td>
                <td>
                    <button type="button" className="btn btn-outline-info tick" hidden={!add} onClick={this.onHandleSave}>
                        <i className="fas fa-check "></i>
                    </button>
                    <button type="button" className="btn btn-outline-danger" hidden={!add} onClick={this.onHandleAdd}>
                        <i className="fas fa-times"></i>
                    </button>
                    <button type="button" className="btn btn-outline-success" hidden={add} onClick={this.onHandleAdd}>
                        <i className="fas fa-plus"></i>
                    </button>
                </td>
            </tr>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        tasks : state.tasks
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddTask: (task) => {            
            dispatch(actions.ADDTASK(task))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (AddTask);