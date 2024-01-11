import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    arrBooks: [
        { name: "shikupizki", code: 123, price: 25, url: "https://upload.wikimedia.org/wikipedia/he/4/44/Shiku.jpg", author: "david" },
        { name: "Benzi", code: 124, price: 30, url: "https://he.wikipedia.org/wiki/%D7%A7%D7%95%D7%91%D7%A5:%D7%A2%D7%98%D7%99%D7%A4%D7%94-%D7%91%D7%A0%D7%A6%D7%99.jpg", author: "moshe" }
    ],
    selectBook: null,
    selectBookForEdit: null
}

export const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        addBook: (state, action) => {
            state.arrBooks.push(action.payload)
        },
        removeBook: (state, action) => {
            let code = action.payload;
            let index = state.arrBooks.findIndex(item => item.code === code);
            state.arrBooks.splice(index, 1);
        },
        selectBook: (state, action) => {
            state.selectBook = action.payload;
        },
        selectBookToEdit: (state, action) => {
            state.selectBookForEdit = action.payload;
        },
        saveEditBook: (state, action) => {
            let copy = state.arrBooks.map(item => {
                if (item.code !== action.payload.code)
                    return item;
                return action.payload
            })
            state.arrBooks = copy;
        },
    },
})

export const { addBook, removeBook, selectBook, selectBookToEdit, saveEditBook } = bookSlice.actions

export default bookSlice.reducer