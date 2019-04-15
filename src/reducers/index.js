import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

//when our Redux application first boots up, it automatically runs all registered reducers to accumulate initial state. We need to assume that reducers will be run over and over and at times we may not expect (this is why the action type system is important). The reducer needs to only change it's data when the appropriate action is received.

export default combineReducers({
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer
});