const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(cors());


const PORT = process.env.PORT || 5000;

// ENDPOINT for SERPAPI
app.get('/api/jobs', async (req, res ) => {
    const { query } = req.query;

    try {   
        const serpAPIURL = `https://serpapi.com/search.json?engine=google_jobs&q=${query}&api_key=${process.env.SERP_API_KEY}`;
        const response = await axios.get(serpAPIURL);
        res.json(response.data.jobs_results || []);
    } catch (error) {
      res.status(500).json({ error: error.message})
    }
});

app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`);
})