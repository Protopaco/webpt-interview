import Header from './components/Header/Header';
import { fetchData } from './utils/fetchData';
import './App.css';

function App() {
  const handleClick = async () => {
    const response = await fetchData();
    console.log("response", response)
  }
  return (
    <Header handleClick={handleClick} />
  );
}

export default App;
