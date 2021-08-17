
import { createStore } from 'redux'

const INITIAL_STATE = {
    data: [
        684,
        683
    ],
}

function ids(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'ADD_ID':
            return {...state, data: [...state.data, action.id] };
            default:
                return state;
    }
}

const store = createStore(ids)

export default store;