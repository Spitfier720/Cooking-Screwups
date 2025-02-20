import { useEffect, useState } from 'react';
import './App.css';
import screwupLog from './screwupLog.json';
import Table from './Table';

function App() {
  const [entries, setEntries] = useState([]);
  const [filteredEntries, setFilteredEntries] = useState([]);

  useEffect(() => {
    if(process.env.REACT_APP_USE_PERSONAL_DATA === 'true') {
      setEntries(screwupLog);
      setFilteredEntries(screwupLog);
    }
  }, []);
  
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setFilteredEntries(
      entries.filter(
        entry => entry.dish.toLowerCase().includes(query.toLowerCase())
      )
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <title>Cooking Screwups</title>
        <h1>Cooking Screwups</h1>
        <span>
          <input 
            type="text" 
            placeholder="Type a dish"
            onChange = {handleSearchChange}
          />
          <button>Add Screwup</button>
        </span>
        <Table entries={filteredEntries} />
      </header>
    </div>
  );
}

export default App;
