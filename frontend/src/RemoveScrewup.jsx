export const handleRemove = (selectedRows, entries, setEntries, setFilteredEntries, setSelectedRows) => {
    const updatedEntries = entries.filter(entry => !selectedRows.includes(entry));
    setEntries(updatedEntries);
    setFilteredEntries(updatedEntries);

    fetch('/api/update-screwupLog', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedEntries)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to update screwupLog.json');
            }
            console.log('screwupLog.json updated successfully');
        })
        .catch(error => {
            console.error('Error updating screwupLog.json:', error);
        });
    
    setSelectedRows([]); // Clear selected rows after removal
}