function SuggestionInput({screwups, setScrewups, currentScrewup, setCurrentScrewup, suggestions, setSuggestions, allScrewups, selectedIndex, setSelectedIndex}) {
    return (
        <div>
            <input
                type="text"
                className="screwup-input"
                value={currentScrewup}
                onChange={(e) => handleScrewupsChange(e, setSuggestions, allScrewups, setCurrentScrewup)} 
                onKeyDown={(e) => handleKeyDown(e, suggestions, setSuggestions, selectedIndex, setSelectedIndex, screwups, setScrewups, currentScrewup, setCurrentScrewup)}
            />
            {suggestions.length > 0 && (
                <ul className="suggestions">
                    {suggestions.map((suggestion, index) => (
                        <li 
                            key={index} 
                            className={index === selectedIndex ? 'selected' : ''}
                            onClick={() => handleSuggestionClick(suggestion, screwups, setScrewups, setSuggestions, setSelectedIndex, setCurrentScrewup)}
                        >
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
            <div className="screwup-list">
                {screwups.map((screwup, index) => (
                    <div key={index} className="screwup-item">
                        {screwup}
                        <button
                            type="button"
                            className='remove-button'
                            onClick={() => removeSuggestion(index, screwups, setScrewups)}
                        >
                            X
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export const handleScrewupsChange = (e, setSuggestions, allScrewups, setCurrentScrewup) => {
    const input = e.target.value;
    setCurrentScrewup(input);

    const inputLines = input.split('\n');
    const currentLine = inputLines[inputLines.length - 1];
    
    if(currentLine.trim() === '') {
        setSuggestions([]);
    }
    else {
        const filteredSuggestions = Array.from(allScrewups).filter(screwup => 
            screwup.toLowerCase().includes(currentLine.toLowerCase())
        );
        setSuggestions(filteredSuggestions.slice(0, 5));
    }
};

export const handleSuggestionClick = (suggestion, screwups, setScrewups, setSuggestions, setSelectedIndex, setCurrentScrewup) => {
    if(!screwups.includes(suggestion)) {
        setScrewups([...screwups, suggestion]);
    }
    setSuggestions([]);
    setSelectedIndex(-1);
    setCurrentScrewup('');
}

export const handleKeyDown = (e, suggestions, setSuggestions, selectedIndex, setSelectedIndex, screwups, setScrewups, currentScrewup, setCurrentScrewup) => {
    if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prevIndex) => (prevIndex + 1) % suggestions.length);
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prevIndex) => (prevIndex - 1 + suggestions.length) % suggestions.length);
    } else if (e.key === 'Enter') {
        e.preventDefault();

        if(selectedIndex >= 0 && selectedIndex >= 0) {
            handleSuggestionClick(suggestions[selectedIndex], screwups, setScrewups, setSuggestions, setSelectedIndex, setCurrentScrewup);
        }

        else if (currentScrewup.trim() !== '') {
            handleSuggestionClick(e.target.value, screwups, setScrewups, setSuggestions, setSelectedIndex, setCurrentScrewup);
        }
    }
}

export const removeSuggestion = (index, screwups, setScrewups) => {
    const updatedScrewups = screwups.filter((_, i) => i !== index);
    setScrewups(updatedScrewups);
}

export default SuggestionInput;