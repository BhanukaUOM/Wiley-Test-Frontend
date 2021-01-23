// Reducers: combine all reducers of the app
import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import auth from "./modules/login/ducks"



export default combineReducers({
  // router: connectRouter(history),
  form: reduxFormReducer,
  auth:auth
});

