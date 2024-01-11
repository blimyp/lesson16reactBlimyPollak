import logo from './logo.svg';
import './App.css';
import List from './features/books/List'
import { useSelector } from 'react-redux';
import SelectBook from './features/books/SelectBook'
import Form from './features/books/Form'

function App() {

  let select = useSelector(state => state.book.selectBook)
  let toEdit = useSelector(state => state.book.selectBookForEdit)
  return (
    <div className="App">
      <List />
      {select && <SelectBook />}
      {toEdit && <Form/>}
    </div>
  );
}

export default App;
