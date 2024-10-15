A weather application that allows users to search for the current weather of any city using a weather API. This project is built with:
   Backend: Node.js (Express) to fetch weather data from an external API (OpenWeatherMap).
   Frontend: React.js to provide a user-friendly interface to search for and display weather information.
# Table of Contents:
  Features,
  Technologies Used,
  Prerequisites,
  Installation,
  Usage,
  API Documentation,
  Environment Variables.
# Features
  Search for weather information by city name.
  Display real-time temperature, weather conditions, and other data.
  Show error message if the city is not found.
  Backend API fetches data from OpenWeatherMap and simplifies the response.
# Technologies Used
 Backend :
   Node.js,
   Express.js,
   Axios (for making HTTP requests to the weather API).
 Frontend:
   React.js,
   Axios (for communicating with the backend).
External API:
  OpenWeatherMap API (for weather data).
# Prerequisites
   Node.js (v12 or higher) if using Node.js for the backend.
   React.js (with Node.js and npm/yarn installed).
   OpenWeatherMap API key (You can get one from here).
# Installation
 Backend (Node.js/Express):
   cd weather-app/backend
 Install dependencies:
   npm install
 Create a .env file in the backend directory and add your OpenWeatherMap API key:
   API_KEY=my_api_key
 Run the backend server:
   node app.js
 Frontend (React.js)
  Navigate to frontend directory
    cd weather-app
  Install dependencies 
    npm install
  Run the React app:
    npm start
# Usage
  Open your browser and go to http://localhost:3000.
  Enter the name of a city in the search input.
  The current weather for that city will be displayed, including temperature, weather conditions, etc.
  If the city is not found, an error message will be shown.
# Environment Variables
 To run this project, you will need to add the following environment variables to your .env file:
  API_KEY:OpenWeatherMap API key.

  

![Screenshot 2024-10-15 195452](https://github.com/user-attachments/assets/7d517b2e-2d43-4fee-87ae-1dd2ce4f2c49)


   
