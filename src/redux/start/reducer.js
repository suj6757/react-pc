import {
    SAVE_SEARCH_CONDITION
} from '../actions';

const INIT_STATE = {  
    SearchCondition : null
};

export default (state = INIT_STATE, action) => {
    switch(action.type){
        case SAVE_SEARCH_CONDITION:
            return {...state, SearchCondition: {...action.payload}};
        default: 
            return state;
    }
};