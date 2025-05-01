import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AddScrewupPage from './AddScrewup';
import {countCommonErrors} from './CommonErrors';
import HomePage from './HomePage';
import screwupLog from './screwupLog.json';

function App() {
	const [entries, setEntries] = useState([]);
	const [filteredEntries, setFilteredEntries] = useState([]);
	const [commonErrors, setCommonErrors] = useState({});

	console.log(import.meta.env.VITE_APP_USE_PERSONAL_DATA)

	useEffect(() => {
		if(import.meta.env.VITE_APP_USE_PERSONAL_DATA === 'true') {
			setEntries(screwupLog);
			setFilteredEntries(screwupLog);
		}
	}, []);

	useEffect(() => {
		const errors = countCommonErrors(filteredEntries);
		setCommonErrors(errors);
	}, [filteredEntries]);

	return (
		<Router>
			<Routes>
				<Route 
					path = "/"
					element = {
						<HomePage 
							entries={entries} 
							filteredEntries={filteredEntries} 
							setFilteredEntries={setFilteredEntries} 
							commonErrors={commonErrors}
						/>
					}
				/>
				<Route 
					path = "/add-screwup" 
					element = {
						<AddScrewupPage 
							entries={entries} 
							setEntries={setEntries}
						/>
					}
				/>
			</Routes>
		</Router>
	)
}

export default App;
