/**
 * Street Address Parser - APIVerve API Tutorial
 * Parse street addresses into structured components.
 */

const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY;
const API_URL = 'https://api.apiverve.com/v1/streetaddressparser';

app.use(express.static('public'));
app.use(express.json());

// Parse address endpoint
app.get('/api/parse', async (req, res) => {
  const { address } = req.query;

  if (!address) {
    return res.status(400).json({
      status: 'error',
      error: 'Address is required'
    });
  }

  try {
    const response = await fetch(`${API_URL}?address=${encodeURIComponent(address)}`, {
      method: 'GET',
      headers: {
        'x-api-key': API_KEY
      }
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('API Error:', error.message);
    res.status(500).json({
      status: 'error',
      error: 'Failed to parse address'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Address Parser running at http://localhost:${PORT}`);
});
