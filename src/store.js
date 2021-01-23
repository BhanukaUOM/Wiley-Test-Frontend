import { createLogicMiddleware } from "redux-logic";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import services from "./services";

// Create redux-logic middleware
const logicMiddleware = createLogicMiddleware(services, {});

// Middlewares: applyMiddleware() tells createStore() how to handle middleware
const middleware = applyMiddleware(logicMiddleware);

// Create enhancer
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(middleware);

// Create store
let store = createStore(reducers, enhancer);

export default store;