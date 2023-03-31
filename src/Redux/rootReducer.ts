import { combineReducers } from "redux";
import LoginReducer from '@Pages/Login/Reducer'
import SignupReducer from '@Pages/Signup/Reducer'

const rootReducer = combineReducers({
...LoginReducer,
...SignupReducer
});

export default rootReducer