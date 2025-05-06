import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AddScrewupPage from './AddScrewup';
import {countCommonErrors} from './CommonErrors';
import HomePage from './HomePage';

function App() {
	const [entries, setEntries] = useState([]);
	const [filteredEntries, setFilteredEntries] = useState([]);
	const [commonErrors, setCommonErrors] = useState({});

	useEffect(() => {
		if(import.meta.env.VITE_APP_USE_PERSONAL_DATA === 'true') {
			console.log('Using personal data');

			fetch('api/screwupLog')
				.then(response => {
					console.log('Response:', response);
					if (!response.ok) {
						throw new Error('HTTP error! Status: ' + response.statusText);
					}
					return response.json();
				})
				.then(data => {
					console.log('Fetched data:', data);
					setEntries(data);
					setFilteredEntries(data);
				})
				.catch(error => console.error('Error fetching screwupLog:', error));
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
							setFilteredEntries={setFilteredEntries}
						/>
					}
				/>
			</Routes>
		</Router>
	)
}

export default App;
