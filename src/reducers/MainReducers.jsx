import { combineReducers } from 'redux';
import tasks from './tasks';
import filtertable from './filtertable'
import sorttable from './sorttable';


const myReducer = combineReducers({
    tasks,
    filtertable,
    sorttable
})

export default myReducer;