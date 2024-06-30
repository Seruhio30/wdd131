document.addEventListener("DOMContentLoaded", () => {
    const temp = document.querySelector("#temperature");
    const condit = document.querySelector("#condition");
    const wind = document.querySelector("#wind");
    const windchill = document.querySelector("#wind-chill");

    const temperature = 27;  // Grados Celsius
    const condition = "Cloudy";
    const windSpeed = 9;  // km/h

    function calculateWindChill(temperature, windSpeed) {
        return (13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature) * Math.pow(windSpeed, 0.16)).toFixed(2);
    }

    temp.textContent = `${temperature} °C`;
    condit.textContent = condition;
    wind.textContent = `${windSpeed} km/h`;

    if (temperature <= 10 && windSpeed > 4.8) {
        windchill.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
    } else {
        windchill.textContent = "N/A";
    }

    
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;
    document.getElementById("lastModified").textContent = document.lastModified;
});
