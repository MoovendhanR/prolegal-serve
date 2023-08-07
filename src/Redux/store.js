import {legacy_createStore,combineReducers,applyMiddleware,compose} from 'redux';
import thunk from "redux-thunk";
import PersonsReducer from './Candidates/reducer';
const rootReducer = combineReducers({
    candidatesData:PersonsReducer,
});
 
const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__||compose;

export const store = legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);
