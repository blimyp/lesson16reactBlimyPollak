import OneBook from "./OneBook";
import { useSelector } from 'react-redux'


const List = () => {
    let arr = useSelector(state => state.book.arrBooks )
    return (
        <>
            <h1>All Books</h1>
            <ul>
                {arr.map(item => <li key={item.code}>{<OneBook book={item}/>}</li>  )}
          </ul>
        </>
    );
}

export default List;