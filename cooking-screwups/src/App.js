import { useEffect, useState } from 'react';
import './App.css';
import screwupLog from './screwupLog.json';
import Table from './Table';

function App() {
	const [entries, setEntries] = useState([]);
	const [filteredEntries, setFilteredEntries] = useState([]);
	const [commonErrors, setCommonErrors] = useState({});

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

	useEffect(() => {
	countCommonErrors();
	}, [filteredEntries]);

	const countCommonErrors = () => {
		let isOneDish = true;
		let oneDish = "";

		for(let i = 0; i < filteredEntries.length; i++) {
			if(oneDish === "") {
				oneDish = filteredEntries[i].dish;
			}

			if(oneDish !== filteredEntries[i].dish) {
				isOneDish = false;
				break;
			}
		}

		if(oneDish === "") {
			isOneDish = false;
		}

		if(isOneDish) {
			const tempCommonErrors = {};

			for(let i = 0; i < filteredEntries.length; i++) {
				if(filteredEntries[i].dish === oneDish) {
					let screwups = filteredEntries[i].screwups;
					
					for(let j = 0; j < screwups.length; j++) {
						let error = screwups[j];
						
						if(tempCommonErrors[error]) {
							tempCommonErrors[error] += 1;
						} else {
							tempCommonErrors[error] = 1;
						}
					}
				}
			}

			setCommonErrors(tempCommonErrors);
		}
		else {
			setCommonErrors({});
		}
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
		{Object.keys(commonErrors).length > 0 && (
				<div>
					<h3>Common Errors</h3>
					<div className = "common-errors-container">
						{Object.keys(commonErrors).sort((a, b) => commonErrors[b] - commonErrors[a]).map(error => (
						<p key={error} className = "common-error">
							{error}: {commonErrors[error]}
						</p>
						))}
					</div>
				</div>
		)}
		</header>
	</div>
	);
}

export default App;
