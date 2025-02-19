function Table({entries}) {
    return (
        <table>
        <thead>
            <tr>
            <th>Date</th>
            <th>Dish Cooked</th>
            <th>Screwups Made</th>
            <th>Possible Improvements</th>
            <th>Additional Notes</th>
            </tr>
        </thead>
        <tbody>
            {entries.map((entry, index) => (
            <TableRow key={index} entry={entry} />
            ))}
        </tbody>
        </table>
    )
}

function TableRow({entry}) {
    return (
        <tr>
        <td>{entry.date}</td>
        <td>{entry.dish}</td>
        <td className="left-align">
            <TableEntry dataList={entry.screwups} />
        </td>
        <td className="left-align">
            <TableEntry dataList={entry.improvements} />
        </td>
        <td className="left-align">
            <TableEntry dataList={entry.notes} />
        </td>
        </tr>
    )
}

function TableEntry({dataList}) {
    return (
        <div>
        {dataList.map((data, index) => (
            <div key={index}>{data}</div>
        ))}
        </div>
    )
}

export default Table;