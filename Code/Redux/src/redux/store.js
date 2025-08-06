import { createStore } from "redux";


import rootReducer from '../reducer/rootReducer'

// mục đích dùng logger ra nội dung
import { composeWithDevTools } from "redux-devtools-extension";

// includes: reducers, middleware, ...
const store = createStore(
    rootReducer, 
    composeWithDevTools()
);

export default store;