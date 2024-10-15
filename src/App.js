// frontend/src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');

    const fetchWeather = async () => {
        setError('');
        try {
            const response = await axios.get(`http://localhost:5000/api/weather/${city}`);
            setWeather(response.data);
        } catch (err) {
            setError('City not found. Please try again.');
            setWeather(null);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchWeather();
    };

    return (
        <div className="App">
            <h1>Weather App</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter city name"
                    required
                />
                <button type="submit">Get Weather</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {weather && (
                <div>
                    <h2>Weather in {weather.city}</h2>
                    <p>Temperature: {weather.temperature}°C</p>
                    <p>Condition: {weather.weather}</p>
                </div>
            )}
        </div>
    );
}

export default App;
