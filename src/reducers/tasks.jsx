import * as types from '../constants/ActionTypes';
import { findIndex } from 'lodash'

var data = JSON.parse(localStorage.getItem("tasks"))
var initialState = data ? data : [];


var myReducer = (state = initialState, action) => {
    let id = -1;
    switch (action.type) {
        case types.LISTALL:
            return state;

        case types.ADDTASK:
            var newTask = {
                id: Date.now(),
                name: action.task.name,
                status: action.task.status
            }            
            state.push(newTask)
            localStorage.setItem("tasks", JSON.stringify(state))
            return [...state];

        case types.TYPEDELTASK:
            id = findIndex(state, (task) => {
                return action.task.id === task.id;
            })
            if (id !== -1) {
                if (action.task.mis === "change") {
                    state[id] = {
                        ...state[id],
                        status: !state[id].status
                    }
                }
                else
                    if (action.task.mis === "del") {
                        state.splice(id, 1)
                    }
                localStorage.setItem("tasks", JSON.stringify(state))
                return [...state]
            }
            break;
        case types.RENAME:
            id = findIndex(state, (task) => {
                return action.task.id === task.id;
            })
            if (id !== -1)
                state[id].name = action.task.name
            localStorage.setItem("tasks", JSON.stringify(state))
            return [...state]

        default:
            return state;

    }
}

export default myReducer;