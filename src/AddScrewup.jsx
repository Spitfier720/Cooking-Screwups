import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddScrewupPage({ entries, setEntries }) {
    const [dish, setDish] = useState('');
    const [screwups, setScrewups] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const screwupArray = screwups.split(',').map(s => s.trim());
        const newScrewup = {
            date: new Date().toLocaleDateString(),
            dish: dish,
            screwups: screwupArray,
            improvements: [],
            notes: []
        }

        setEntries([...entries, newScrewup]);
        navigate('/');
    }

    return (
        <div className="App">
            <h2>Add Screwup</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Dish:
                    <input type="text" value={dish} onChange={(e) => setDish(e.target.value)} required />
                </label>
                <br />
                <label>
                    Screwups (comma separated):
                    <input type="text" value={screwups} onChange={(e) => setScrewups(e.target.value)} required />
                </label>
                <br />
                <button type="submit">Add Screwup</button>
                <button type="button" onClick={() => navigate('/')}>Cancel</button>
            </form>
        </div>
    );
}

export default AddScrewupPage;