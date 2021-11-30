import { fetchBookdata } from '../redux/actions/books/bookAction';
import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';

const Booklist = () => {
    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(fetchBookdata());
    }, [dispatch]);
    const { books, loading } = useSelector(state => {
        return state.bookList;
    });
    console.log(books);
    console.log(loading);

    return (
        <div>
            {books && books.map(ele => (<div>{ele.title}</div>))}

        </div>
    )
};

export default Booklist;