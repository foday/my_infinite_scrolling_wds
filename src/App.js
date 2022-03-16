import './App.css';
import React, {useState} from 'react'
import useSearchBook from './useSearchBook';

function App() {
  const [query, setQuery] = useState('');
  const [pageNum, setPageNum] = useState(1);

  function handleSearch(e) {
    setQuery(e.target.value)
    setPageNum(1)
  }

  useSearchBook(query, pageNum)
  return (
    <div className="App">
      <h1>Search books</h1>
      <input type="text" onChange={handleSearch}></input>
    </div>
  );
}

export default App;
