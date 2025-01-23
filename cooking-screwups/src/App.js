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
          <tr>
            <td>December 11, 2024</td>
            <td>Pasta</td>
            <td>Put the pork in too early</td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </header>
    </div>
  );
}

export default App;
