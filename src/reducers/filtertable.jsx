import * as types from '../constants/ActionTypes';


var initialState = {
    filterName: "",
    filterType: 0
}

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILTER:
            let { filterName, filterType } = action.filter;
            state= {
                filterName : filterName!==undefined ? filterName : state.filterName ? state.filterName : "",
                filterType : filterType ? Number(filterType) : state.filterType ? Number(state.filterType) : 0    
            }
            return state;
       default:
            return state;
    }
}

export default myReducer;