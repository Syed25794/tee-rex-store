import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { CartReducer } from "./Cart/CartReducer";
import { ProductReducer } from "./Product/ProductReducer";

const rootReducer = combineReducers({CartReducer,ProductReducer});

export const store = createStore(rootReducer,applyMiddleware(thunk));