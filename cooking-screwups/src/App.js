import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <title>Cooking Screwups</title>
        <h1>Cooking Screwups</h1>
        <span>
          <input type="text" placeholder="Type a dish"></input>
          <button>Add Screwup</button>
          <button>Remove Screwup</button>
        </span>
        <table>
          <tr>
            <th>Date</th>
            <th>Dish Cooked</th>
            <th>Screwups Made</th>
            <th>Possible Improvements</th>
            <th>Additional Notes</th>
          </tr>
        </table>
      </header>
    </div>
  );
}

export default App;
