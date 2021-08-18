import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage
}

const persitedReducer = persistReducer(persistConfig, ids)

const INITIAL_STATE = {
    data: [
        
    ],
}

function ids(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_ID':
            return { ...state, data: [...state.data, action.id] };
        default:
            return state;
    }
}

const store = createStore(persitedReducer)
const persistor = persistStore(store)

export { store, persistor };