function submitCity(event) {
  event.preventDefault();
  let searchCity = document.querySelector("#search-new-city");
  let newCity = document.querySelector("#city");
  newCity.innerHTML = searchCity.value;
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", submitCity);
