import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import CommonErrors from './CommonErrors';
import {handleRemove} from './RemoveScrewup';
import SearchBar from './SearchBar';
import Table from './Table';

function HomePage({ entries, setEntries, filteredEntries, setFilteredEntries, commonErrors}) {
    const [selectedRows, setSelectedRows] = useState([]);
    const navigate = useNavigate();

    return (
        <div className="App">
            <header className="App-header">
                <title>Cooking Screwups</title>
                <h1>Cooking Screwups</h1>
                <div className="functionalities">
                    <SearchBar entries={entries} setFilteredEntries={setFilteredEntries} />
                    <button onClick={() => navigate('/add-screwup')}>Add Screwup</button>
                    {selectedRows.length > 0 && (
                        <div>
                            <button onClick={() => handleEdit(selectedRows)}>Edit Screwup</button>
                            <button onClick={() => handleRemove(selectedRows, entries, setEntries, setFilteredEntries, setSelectedRows)}>Remove Screwup</button>
                        </div>
                    )}
                </div>
                <Table 
                    entries={filteredEntries}
                    selectedRows={selectedRows}
                    setSelectedRows={setSelectedRows}
                />
                <CommonErrors commonErrors={commonErrors} />
            </header>
        </div>
    );
}

export default HomePage;