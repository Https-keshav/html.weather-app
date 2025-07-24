// script.js

async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "488a160ab7fb73044f2936847920a1b1";  // 🔑 Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  
    const weatherInfo = document.getElementById("weatherInfo");
  
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("City not found");
  
      const data = await response.json();
  
      const html = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
        <p><strong>Condition:</strong> ${data.weather[0].main}</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
      `;
  
      weatherInfo.innerHTML = html;
  
    } catch (error) {
      weatherInfo.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    }
  }
  