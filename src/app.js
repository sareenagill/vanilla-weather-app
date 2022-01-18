function displayTemperature(reponse) {
  console.log(respone.data);
}

let apiKey = "c54ef4831aa33703bc0280271dfa5d24";

let apiUrl = `api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
