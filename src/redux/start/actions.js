import {
    SAVE_SEARCH_CONDITION
} from '../actions';

export const saveSearchCondition = (param) => ({
    type: SAVE_SEARCH_CONDITION,
    payload: param
});