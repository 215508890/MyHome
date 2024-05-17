function fetchWeather() {
    // Assuming you have an API endpoint or a third-party API for weather data
    fetch('/api/weather')
    .then(response => response.json())
    .then(data => {
        document.getElementById('weather').innerHTML = `Current temperature: ${data.temperature}°C, ${data.description}`;
    })
    .catch(error => console.error('Failed to fetch weather data:', error));
}

fetchWeather();  // Initial call to fetch weather
setInterval(fetchWeather, 1800000);  // Update weather every 30 minutes
