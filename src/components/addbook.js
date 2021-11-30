import { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { createBookAction } from '../redux/actions/books/bookAction';
import { useDispatch } from 'react-redux';
const AddBook = () => {
    const [author, Setauthor] = useState('');
    const [title, SetTitle] = useState('');
    const [category, SetCat] = useState('');
    const handlecat = (e) => {
        SetCat(e.target.value);
    }
    const handleauthor = (e) => {
        Setauthor(e.target.value);
    }
    const handleTitle = (e) => {
        SetTitle(e.target.value);
    }

    //dispatch
    const dispatch = useDispatch();

    //handle submit
    const submit_book = () => {
        //console.log("gaya");
        dispatch(createBookAction({ author, title, category }));
        //console.log("gaya");
    }
    return (
        <div>
            <div> <TextField id="standard-basic" label="Category" variant="standard" onChange={handlecat} value={category} />
                <TextField id="standard-basic" label="Author" variant="standard" onChange={handleauthor} value={author} />
                <TextField id="standard-basic" label="Title" variant="standard" onChange={handleTitle} value={title} />
            </div>
            <div>
                <Button variant="outlined" color="error" onClick={submit_book}>
                    ADD
        </Button>
            </div>
        </div>
    )
}
export default AddBook;