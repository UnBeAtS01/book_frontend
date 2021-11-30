import { CREATE_BOOK_FAIL, CREATE_BOOK_REQUEST, CREATE_BOOK_SUCCESS, FETCH_BOOK_FAIL, FETCH_BOOK_REQUEST, FETCH_BOOK_SUCCESS } from "../actionTypes";
import axios from 'axios';
const createBookAction = bookData => {
    return async (dispatch) => {
        try {

            dispatch({
                type: CREATE_BOOK_REQUEST,
            });
            const config = {
                'Content-Type': 'application/json',
            }
            const { data } = await axios.post('http://localhost:8000/api/books', bookData, config);
            dispatch({
                type: CREATE_BOOK_SUCCESS,
                payload: data,
            })

        }
        catch (error) {
            dispatch({
                type: CREATE_BOOK_FAIL,
                payload: error.response && error.response.data.message,
            })
        }
    }
}


//fetch all books(action)
const fetchBookdata = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: FETCH_BOOK_REQUEST,
            });

            const config = {
                headers: { 'Content-Type': 'application/json' }
            }

            const { data } = await axios.get('/api/books');
            dispatch({
                type: FETCH_BOOK_SUCCESS,
                payload: data,
            });
        }
        catch (error) {
            dispatch({
                type: FETCH_BOOK_FAIL,
                payload: error.response && error.response.data.message,
            })
        }
    }
}
export { createBookAction, fetchBookdata };