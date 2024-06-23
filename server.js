const express = require('express');
const fetch = require('node-fetch'); // Use the CommonJS-compatible version
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors()); // Enable CORS for all routes

app.get('/api/search', async (req, res) => {
  const { query } = req.query;
  try {
    const response = await fetch(`http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=${query}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
