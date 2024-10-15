const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/weather/:city', async (req, res) => {
    const city = req.params.city;
    const apiKey = process.env.API_KEY; // Add your OpenWeatherMap API key to .env
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await axios.get(url);
        const data = response.data;

        const weatherData = {
            city: data.name,
            temperature: data.main.temp,
            weather: data.weather[0].description,
        };
        res.json(weatherData);
    } catch (error) {
        res.status(404).json({ message: 'City not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
