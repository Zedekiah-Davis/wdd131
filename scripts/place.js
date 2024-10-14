document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;
});

const temperature = 20; // You can adjust this value as needed
const windSpeed = 4;   // You can adjust this value as needed
const conditions = document.querySelector("#current-condition");
conditions.innerHTML = "Sunny";

// Function to calculate wind chill in Celsius
function calculateWindChill(temp, speed) {
    // Wind chill formula in Celsius
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}

// Function to display wind chill or "N/A" based on conditions
function displayWindChill() {
    const windChillElement = document.getElementById('current-wind-chill');
    const temperatureElement = document.getElementById('current-temp');
    const windSpeedElement = document.getElementById('windspeed');

    // Display the temperature and wind speed
    temperatureElement.textContent = temperature;
    windSpeedElement.textContent = windSpeed;

    // Check if the conditions for calculating wind chill are met
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = windChill.toFixed(2);  // Rounded to 2 decimals
    } else {
        windChillElement.textContent = "N/A";
    }
}

// Call the displayWindChill function when the page loads
document.addEventListener('DOMContentLoaded', displayWindChill);