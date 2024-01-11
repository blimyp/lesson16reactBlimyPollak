import { useSelector } from "react-redux";

const SelectBook = () => {
    let book = useSelector(state => state.book.selectBook)
    return (<>
        <h1 style={{ color: "red" }}>{book.name}</h1>
        <img src={book.src}></img>
    </>);
}

export default SelectBook;