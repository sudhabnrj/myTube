const express = require('express');
const fetch = require('node-fetch'); // Use the CommonJS-compatible version
const cors = require('cors');

const app = express();

// Enable CORS for all routes, restrict to Netlify domain in production
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' ? 'https://videobank.netlify.app/' : '*',
};
app.use(cors(corsOptions));

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

// Export the app as a function
module.exports = app;
