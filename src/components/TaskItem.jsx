import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from './../actions/MainActions';
class TaskItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            id: -1,
            change: true
        }
    }

    componentWillMount() {
        this.setState({
            name: this.props.taskItem.name
        })
    }

    onHandleDrop = () => {
        let obj = {
            mis: "change",
            id: this.props.taskItem.id
        }
        this.props.onDelTask(obj)
    }

    onHandleDel = () => {
        let obj = {
            mis: "del",
            id: this.props.taskItem.id
        }
        this.props.onDelTask(obj)
    }

    onHandleChange = (e) => {
        let value = e.target.value;
        this.setState({
            name: value,
            id: this.props.taskItem.id
        })
    }

    onHandleRename = () => {
        this.setState({
            change: !this.state.change
        })
        if (this.state.change === false) {
            this.props.onRename(this.state)
        }

    }

    onHandleRenameEnter = (e) => {
        if (e.key === "Enter")
            this.onHandleRename()
    }

    onHandelRedo = () => {
        this.setState({
            name: this.props.taskItem.name,
        })
    }

    render() {
        let { taskItem, index } = this.props;
        let { name } = this.state;
        return (
            <tr>
                <th scope="row" className="">{index}</th>
                <td>
                    <div className="input-group mb-3">
                        <input className={this.state.change ? "item boderdarkcyan form-control cursor" : " item bodercrimson form-control writing"} type="text" value={name} name="name" onChange={this.onHandleChange} readOnly={this.state.change ? true : false} onKeyPress={this.onHandleRenameEnter} />
                        <div className="input-group-append">
                            <button className="btn mybtn btn-outline-secondary" type="button" onClick={this.onHandelRedo} hidden={this.state.change ? true : false}>
                                <i className="fas fa-redo"></i>
                            </button>
                            <button className="btn mybtn btn-outline-secondary" type="button" onClick={this.onHandleRename}>
                                <i className={this.state.change ? "fas fa-pen" : "fas fa-check"}></i>
                            </button>
                        </div>
                    </div>
                </td>
                <td>
                    <div className="dropdown mydropdown">
                        <button className={taskItem.status ? "btn dropdown-toggle btn-warning" : "btn dropdown-toggle  btn-info"} type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                            {taskItem.status ? "Important" : "Not Important"}
                        </button>
                        <div className="dropdown-menu mydrop" aria-labelledby="triggerId">
                            <a className={taskItem.status ? "bg-info dropdown-item text-light" : "bg-warning dropdown-item"} onClick={this.onHandleDrop} >
                                {taskItem.status ? "Not Important" : "Important"}
                            </a>
                        </div>
                    </div>
                </td>
                <td>
                    <button type="button" className="btn btn-outline-danger" onClick={this.onHandleDel}>
                        <i className="fas fa-times"></i>
                    </button>

                </td>
            </tr>
        )
    }
}
const mapStateToProps = state => {
    return {
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onDelTask: (task) => {
            dispatch(action.TYPEDELTASK(task))
        },
        onRename: (task) => {
            dispatch(action.RENAME(task))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
