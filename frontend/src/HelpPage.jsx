import {useNavigate} from 'react-router-dom';

function HelpPage() {
    const navigate = useNavigate();
    return (
        <div className="App">
            <header className="App-header">
                <h1>Help &amp; Instructions</h1>
                <h2> Welcome to Cooking Screwups!</h2>
                <div className="help-section">
                    <strong>Home Page</strong>
                    <div>
                        View all your logged cooking mistakes and improvements. You can filter and review past entries. <br />
                        The search bar allows you to filter entries by dish. <br />
                        If there is only one type of dish in the filtered list of entries, a list of common errors will be displayed. <br />
                        The common errors are sorted by the number of times they have been logged, which can be referenced as things to pay more attention to for next time. <br />
                        <br />
                    </div>
                    <strong>Removing and Editing Screwups</strong>
                    <div>
                        You can remove or edit screwups by selecting them and clicking the "Remove Screwup" or "Edit Screwup" button. <br />
                        To select a screwup, click on the checkbox next to it. <br />
                        You can also select all screwups by clicking the "Select All" button, or deselect all screwups with the "Deselect All" button. <br />
                        You can remove multiple screwups at once, however, you can only edit one screwup at a time. <br />
                        <b>REMOVING A SCREWUP IS PERMANENT AND CANNOT BE UNDONE.</b> <br />
                    </div>
                    <hr />
                    <strong>Add Screwup</strong>
                    <div>
                        Click the "Add Screwup" button to log a new cooking screwup. <br />
                        Fill in the date, dish, and details about what went wrong, possible improvements, and any notes. <br />
                        The date and dish are required fields, and the rest of the fields can be left blank if you wish. <br />
                        The screwup field is a text box, but you can add multiple screwups by separating them with a new line. <br />
                        You can use the buttons at the bottom of the page to add or cancel your entry. <br />
                        <br />
                    </div>
                    <strong>Screwup Suggestions</strong>
                    <div>
                        As you type a screwup, suggestions from your previous entries will appear. Use arrow keys or click to select. <br />
                        If your screwup is not in the suggestions, you can add it by pressing enter. <br />
                    </div>
                    <hr />
                    <strong>Help</strong>
                    <div>
                        Click the "Help" button on any page to return here.
                    </div>
                </div>
                <button onClick={() => navigate(-1)}>Back</button>
            </header>
        </div>
    );
}

export default HelpPage;