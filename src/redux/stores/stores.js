import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';
import { createBookReducer } from '../reducers/books/createBookReducers';
import { bookListReducer } from '../reducers/books/bookListReducer';
import userReducer from '../reducers/users/userAuthReducers';
//import { createBookReducer } from '../reducers/books/bookListReducer
const middlewares = [thunk];
const reducer = combineReducers({
    bookCreated: createBookReducer,
    bookList: bookListReducer,
    userLogin: userReducer,
})
const userAuthFromStorage = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')) : null;

const initialState = {
    userLogin: { userInfo: userAuthFromStorage }
};
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)));

export { store };