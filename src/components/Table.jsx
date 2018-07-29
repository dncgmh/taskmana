import React, { Component } from 'react';
import TaskItem from './TaskItem';
import Search from './Search';
import Sort from './Sort';
import AddTask from './AddTask';
import { connect } from 'react-redux';
import * as action from './../actions/MainActions';
import { orderBy, filter } from 'lodash';


class Table extends Component {
    render() {
        let { _tasks, _filter, _sort } = this.props;
        if (_filter) {
            if (_filter.filterName) {
                _tasks = filter(_tasks, (task) => {
                    return task.name.toLowerCase().indexOf(_filter.filterName.toLowerCase()) !== -1
                })
            }
            _tasks = filter(_tasks, (task) => {
                if (_filter.filterType === 0)
                    return task;
                else
                    return task.status === (_filter.filterType === 1 ? true : false)
            })
        }
        if (_sort) {
            if (_sort.nameAz) {
                _tasks = orderBy(_tasks, [task=> task.name.toLowerCase()], ["asc"])
            } else if (_sort.nameAz === false) {
                _tasks = orderBy(_tasks, [task=> task.name.toLowerCase()], ["desc"])
            }
            if (_sort.typeIn) {
                _tasks = orderBy(_tasks, ["status"], ["asc"])
            }
            else if (_sort.typeIn === false) {
                _tasks = orderBy(_tasks, ["status"], ["desc"])
            }
        }
        let elms = _tasks.map((elm, index) => {
            return (
                <TaskItem taskItem={elm} key={elm.id} index={index + 1} />
            )
        })
        return (
            <div>
                <table className="table" >
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>
                                <Search onFilterName={this.props.onFilter} onNameAz={this.props.onSort} />
                            </th>
                            <th>
                                <Sort onFilterType={this.props.onFilter} onTypeIn={this.props.onSort} />
                            </th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {elms}
                        <AddTask />
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        _tasks: state.tasks,
        _filter: state.filtertable,
        _sort: state.sorttable
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onFilter: (filter) => {
            dispatch(action.FILTER(filter))
        },
        onSort: (sort) => {
            dispatch(action.SORT(sort))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);