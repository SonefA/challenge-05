import { createStore } from "redux";
import thunk  from "redux-thunk"
import { applyMiddleware, compose } from "redux"
import  combineReducers  from "../reducer/index";


const middlewareThunk = compose(
    applyMiddleware(thunk), 
    window.__REDUX_DEVTOOLS_EXTENSION_&& window.__REDUX_DEVTOOLS_EXTENSION_()
)


const store = createStore(combineReducers , middlewareThunk)

export default store