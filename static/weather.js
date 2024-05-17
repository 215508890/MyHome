// This is a mock function, replace with actual API call logic
function updateWeather() {
    fetchWeatherData().then(weather => {
        document.getElementById('weather').innerText = `Weather: ${weather.temp}°C, ${weather.description}`;
    });
}

updateWeather(); // Initial call
setInterval(updateWeather, 3600000); // Update hourly
