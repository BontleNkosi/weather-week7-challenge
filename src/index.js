function updateTemperature(response) {
  let newTemperature = document.querySelector("#temperature");
  let Temperature = response.data.temperature.current;
  newTemperature.innerHTML = Math.round(Temperature);
  let newCity = document.querySelector("#city");
  newCity.innerHTML = response.data.city;
  let description = document.querySelector("#description");
  description.innerHTML = response.data.condition.description;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `${response.data.temperature.humidity}%`;
  let wind = document.querySelector("#wind");
  wind.innerHTML = `${response.data.wind.speed}km/h`;
  let time = document.querySelector("#time");
  let date = new date(response.data.time * 1000);
  time.innerHTML = formatDate(date);
  let iconElement = document.querySelector("#icon");
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class= "weather-application-emoji">`;
}

function formatDate(date) {
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0$(minutes)`;
  }
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}
function searchNewCity(city) {
  let apiKey = "5c06e77634650c4ffafabcbabbo73tc3";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(updateTemperature);
}
function submitCity(event) {
  event.preventDefault();
  let searchCity = document.querySelector("#search-new-city");
  searchNewCity(searchCity.value);
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", submitCity);
