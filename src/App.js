import Header from './components/Header';
import List from './components/List';
import { fetchData } from './utils/fetchData';
import './App.css';
import { useState } from 'react';

function App() {
  const [responseArray, setResponseArray] = useState([]);
  const [scoreObject, setScoreObject] = useState({});

  const handleClick = async () => {
    const response = await fetchData();
    if (response !== "error") {
      response.forEach(response => {
        const { source_character } = response;
        let tempScoreObject = scoreObject;
        if (scoreObject[source_character]) {
          tempScoreObject[source_character]++;
        }
        else { tempScoreObject[source_character] = 1 }

        setScoreObject(tempScoreObject);
        setResponseArray([...responseArray, response]);

      })
    }

  }

  return (
    <>
      <Header handleClick={handleClick}
        scoreObject={scoreObject}
      />
      <List listItems={responseArray} />
    </>

  );
}

export default App;
