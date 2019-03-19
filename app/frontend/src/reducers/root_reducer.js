import { combineReducers } from 'redux';
import sessionsReducer from './sessions_reducer';
import entitiesReducer from './entitites_reducer';
import uiReducer from './ui_reducer';

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionsReducer,
    ui: uiReducer
});

export default rootReducer;