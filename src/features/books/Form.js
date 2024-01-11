import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { saveEditBook } from './bookSlice'
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Form = () => {

    let dispatch = useDispatch();
    let arr = useSelector(sta => sta.book.arrBooks)
    let code = useSelector(sta=>sta.book.selectBookForEdit)
    let book = arr.find(item => item.code == code)
    let [newBook, setNewBook] = useState({
        "code":book.code,
        "name": book.name,
        "price": book.price,
        "url": book.url,
        "author": book.author
    })
    const changeDetail = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setNewBook({ ...newBook, [name]: value })
    }
    return (<>
        <TextField id="filled-basic" label="name" name='name' variant="filled" onBlur={(e) => changeDetail(e)} />
        <TextField id="filled-basic" label="price" name='price' variant="filled" type={"number"} onBlur={(e) => changeDetail(e)} />
        <TextField id="filled-basic" label="url" name='url' variant="filled" onBlur={(e) => changeDetail(e)} />
        <TextField id="filled-basic" label="author" name='author' variant="filled" onBlur={(e) => changeDetail(e)} />
        <Button onClick={() => { dispatch(saveEditBook(newBook)) }}>send</Button>
    </>);
}

export default Form;