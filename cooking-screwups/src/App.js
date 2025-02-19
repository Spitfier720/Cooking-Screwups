import { useEffect, useState } from 'react';
import './App.css';
import screwupLog from './screwupLog.json';
import Table from './Table';

function App() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    if(process.env.REACT_APP_USE_PERSONAL_DATA === 'true') {
      setEntries(screwupLog);
    }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <title>Cooking Screwups</title>
        <h1>Cooking Screwups</h1>
        <span>
          <input type="text" placeholder="Type a dish"></input>
          <button>Add Screwup</button>
        </span>
        <Table entries={entries} />
      </header>
    </div>
  );
}

export default App;
