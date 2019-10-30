// Redux imports
import { combineReducers } from 'redux';

// Reducers imports
import NavigationReducer from './navigation_reducer';

// Stored states
const rootReducer = combineReducers({
    navigation: NavigationReducer,
});

export default rootReducer;