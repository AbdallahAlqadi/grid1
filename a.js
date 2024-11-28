const apiKey = "bd3cd9f42c3d9e8a571b155933531f18"; // استبدلها بمفتاحك المجاني

async function getWeather() {
    const city = document.getElementById('city').value;
    const weatherDiv = document.getElementById('weather');

    if (!city) {
        weatherDiv.innerHTML = "<p>Please enter a city name.</p>";
        return;
    }

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();
        const { name, main, weather } = data;

        weatherDiv.innerHTML = `
            <h2>Weather in ${name}</h2>
            <p>Temperature: ${main.temp}°C</p>
            <p>Weather: ${weather[0].description}</p>
        `;
    } catch (error) {
        weatherDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}
