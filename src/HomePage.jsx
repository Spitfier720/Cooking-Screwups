import React from 'react';
import { useNavigate } from 'react-router-dom';
import CommonErrors from './CommonErrors';
import SearchBar from './SearchBar';
import Table from './Table';

function HomePage({ entries, filteredEntries, setFilteredEntries, commonErrors, }) {
    const navigate = useNavigate();

    return (
        <div className="App">
            <header className="App-header">
                <title>Cooking Screwups</title>
                <h1>Cooking Screwups</h1>
                <div className="functionalities">
                    <SearchBar entries={entries} setFilteredEntries={setFilteredEntries} />
                    <button onClick={() => navigate('/add-screwup')}>Add Screwup</button>
                </div>
                <Table entries={filteredEntries} />
                <CommonErrors commonErrors={commonErrors} />
            </header>
        </div>
    );
}

export default HomePage;