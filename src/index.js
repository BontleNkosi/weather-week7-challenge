function updateTemperature(response) {
  let newTemperature = document.querySelector("#temperature");
  let Temperature = response.data.temperature.current;
  newTemperature.innerHTML = Math.round(Temperature);
  let newCity = document.querySelector("#city");
  newCity.innerHTML = response.data.city;
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
searchNewCity("Lisbon");
