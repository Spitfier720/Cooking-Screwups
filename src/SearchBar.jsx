import React from 'react';

function SearchBar({ entries, setFilteredEntries }) {
    const handleSearchChange = (e) => {
        const query = e.target.value;
        setFilteredEntries(
            entries.filter(
                entry => entry.dish.toLowerCase().includes(query.toLowerCase())
            )
        );
    };

    return (
        <input
            type="text"
            placeholder="Search for a dish..."
            onChange={handleSearchChange}
        />
    );
}

export default SearchBar;