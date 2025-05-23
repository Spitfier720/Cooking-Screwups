import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SuggestionInput from './Suggestion';

function AddScrewupPage({ entries, setEntries, setFilteredEntries }) {
    const location = useLocation();
    const screwupToEdit = location.state?.screwup || null;

    const [date, setDate] = useState(screwupToEdit?.date || new Date().toLocaleDateString("en-US", {month: 'long', day: 'numeric', year: 'numeric'}));
    const [dish, setDish] = useState(screwupToEdit?.dish || '');
    const [screwups, setScrewups] = useState(screwupToEdit?.screwups || []);
    const [currentScrewup, setCurrentScrewup] = useState('');
    const [improvements, setImprovements] = useState(screwupToEdit?.improvements.join('\n') || '');
    const [notes, setNotes] = useState(screwupToEdit?.notes.join('\n') || '');

    const [suggestions, setSuggestions] = useState([]);
    const [allScrewups, setAllScrewups] = useState(new Set());
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const navigate = useNavigate();

    useEffect(() => {
        const allPreviousScrewups = new Set(entries.flatMap(entry => entry.screwups));
        setAllScrewups(allPreviousScrewups);
    }, [entries]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const screwupArray = screwups;
        const improvementArray = improvements.split('\n').map(i => i.trim());
        const notesArray = notes.split('\n').map(n => n.trim());
        const newScrewup = {
            date: new Date(date).toLocaleDateString("en-US", {month: 'long', day: 'numeric', year: 'numeric'}),
            dish: dish,
            screwups: screwupArray,
            improvements: improvementArray,
            notes: notesArray
        }

        if(newScrewup.date === "Invalid Date") {
            e.target[0].setCustomValidity("Please enter a valid date.");
            e.target[0].reportValidity();
            return;
        }

        let updatedEntries = [newScrewup, ...entries].sort((a, b) => new Date(b.date) - new Date(a.date));

        if (screwupToEdit) {
            updatedEntries = entries.map(entry => entry.date === screwupToEdit.date ? newScrewup : entry);
        }

        setEntries(updatedEntries);
        setFilteredEntries(updatedEntries);

        // write a backend function to save the new entry to the JSON file
        try {
            const response = fetch('/api/update-screwupLog', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedEntries)
            });

            if (!response.ok) {
                throw new Error('Failed to update screwupLog.json');
            }

            console.log('screwupLog.json updated successfully');
        }
        
        catch (error) {
            console.error('Error updating screwupLog.json:', error);
        }

        navigate('/');
    }

    return (
        <div className="App">
            <header className="App-header">
                <button className="help-button" onClick={() => navigate('/help')}>Help</button>
                <h1>{screwupToEdit ? 'Edit Screwup' : 'Add Screwup'}</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Date:
                        <input 
                            type="text" 
                            value={date} 
                            placeholder={new Date().toLocaleDateString("en-US", {month: 'long', day: 'numeric', year: 'numeric'})}
                            onChange={(e) => setDate(e.target.value)}
                            required 
                        />
                    </label>
                    <br />
                    <label>
                        Dish:
                        <input type="text" value={dish} onChange={(e) => setDish(e.target.value)} required />
                    </label>
                    <br />
                    <p>
                        For the text boxes below, please separate each item with a new line. <br /><br />
                        For example: <br />
                        <span style ={{fontFamily: 'monospace'}}>
                            Forgot to add salt <br />
                            Overcooked the chicken <br />
                            Used the wrong spices <br />
                        </span>
                        Would be considered 3 screwups. <br />
                    </p>
                    <div className="screwup-inputs">
                        <label>
                            Screwups: <br />
                            <SuggestionInput 
                                screwups={screwups}
                                setScrewups={setScrewups}
                                currentScrewup={currentScrewup}
                                setCurrentScrewup={setCurrentScrewup}
                                suggestions={suggestions}
                                setSuggestions={setSuggestions}
                                allScrewups={allScrewups}
                                selectedIndex={selectedIndex}
                                setSelectedIndex={setSelectedIndex}
                            />
                        </label>
                        <label>
                            Possible Improvements: <br />
                            <textarea value={improvements} onChange={(e) => setImprovements(e.target.value)} />
                        </label>
                        <label>
                            Additional Notes: <br />
                            <textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
                        </label>
                    </div>
                    <br />
                    <button type="submit">{screwupToEdit ? 'Edit Screwup' : 'Add Screwup'}</button>
                    <button type="button" onClick={() => navigate('/')}>Cancel</button>
                </form>
            </header>
        </div>
    );
}

export default AddScrewupPage;