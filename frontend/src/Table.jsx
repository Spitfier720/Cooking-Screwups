function Table({entries, selectedRows, setSelectedRows}) {
    if (entries.length === 0) {
        return <div>No entries available.</div>;
    }
    
    return (
        <table>
            <thead>
                <tr>
                <th></th>
                <th>Date</th>
                <th>Dish Cooked</th>
                <th>Screwups Made</th>
                <th>Possible Improvements</th>
                <th>Additional Notes</th>
                </tr>
            </thead>
            <tbody>
                {entries.map((entry, index) => (
                <TableRow 
                    key={index} 
                    entry={entry} 
                    selectedRows={selectedRows} 
                    setSelectedRows={setSelectedRows} 
                />
                ))}
            </tbody>
        </table>
    )
}

function TableRow({entry, selectedRows, setSelectedRows}) {
    const handleCheckboxChange = (entry) => {
        if (selectedRows.includes(entry)) {
            setSelectedRows(selectedRows.filter((row) => row !== entry));
        } else {
            setSelectedRows([...selectedRows, entry]);
        }
    };

    return (
        <tr>
            <td>
                <input 
                    type="checkbox"
                    checked={selectedRows.includes(entry)}
                    onChange={() => handleCheckboxChange(entry)}
                />
            </td>
            <td>{entry.date}</td>
            <td>{entry.dish}</td>
            <td>
                <TableEntry dataList={entry.screwups} />
            </td>
            <td>
                <TableEntry dataList={entry.improvements} />
            </td>
            <td>
                <TableEntry dataList={entry.notes} />
            </td>
        </tr>
    )
}

function TableEntry({dataList}) {
    return (
        <div>
        {dataList.map((data, index) => (
            <div className="table-entry" key={index}>{data}</div>
        ))}
        </div>
    )
}

export default Table;