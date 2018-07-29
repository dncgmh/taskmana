import * as types from '../constants/ActionTypes';


export const LISTALL = () => ({
    type: types.LISTALL
})

export const ADDTASK = (task) => ({
    type: types.ADDTASK,
    task
})

export const TYPEDELTASK = task => ({
    type: types.TYPEDELTASK,
    task
})

export const RENAME = task => ({
    type: types.RENAME,
    task
})

export const FILTER = filter => ({
    type: types.FILTER,
    filter
})

export const SORT = sort => ({
    type: types.SORT,
    sort
})