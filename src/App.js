import Header from './components/Header';
import List from './components/List';
import { fetchData } from './utils/fetchData';
import './App.css';
import { useState } from 'react';

function App() {
  const [responseArray, setResponseArray] = useState([]);

  const handleClick = async () => {
    const response = await fetchData();
    if (response !== "error") {
      response.forEach(response => setResponseArray([...responseArray, response]));
    }
    console.log("responseArray", responseArray);
  }

  return (
    <>
      <Header handleClick={handleClick} />
      <List listItems={responseArray} />
    </>

  );
}

export default App;
