import * as types from './../constants/ActionTypes';


var initialState = {
    nameAz: 0,
    typeIn: 0
}

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SORT:
            return action.sort
        default:
            return state;
    }
}

export default myReducer;