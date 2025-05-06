import cors from 'cors';
import express from 'express';
import { writeFile, readFile } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';

// Get the current directory name (since __dirname is not available in ES modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, '..');

const app = express();
app.use(express.json()); // Middleware to parse JSON request bodies
app.use(cors()); // Enable CORS for all routes

// Path to the screwupLog.json file
const screwupLogPath = join(__dirname, 'screwupLog.json');

// Endpoint to get the screwupLog.json data
app.get('/api/screwupLog', async (req, res) => {
    try {
        const data = await readFile(screwupLogPath, 'utf-8');
        res.json(JSON.parse(data)); // Send the JSON data as a response
    } catch (err) {
        console.error('Error reading screwupLog.json:', err);
        res.status(500).send('Failed to read screwupLog.json');
    }
});

// Endpoint to update screwupLog.json
app.post('/api/update-screwupLog', async (req, res) => {
    const updatedEntries = req.body;

    try {
        // Write the updated entries to screwupLog.json
        await writeFile(screwupLogPath, JSON.stringify(updatedEntries, null, 2));
        res.send('screwupLog.json updated successfully');
    } catch (err) {
        console.error('Error writing to screwupLog.json:', err);
        res.status(500).send('Failed to update screwupLog.json');
    }
});

// Start the server
const PORT = 5000; // You can change this port if needed
app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
});