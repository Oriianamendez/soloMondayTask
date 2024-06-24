const axios = require('axios');

function getCountry(response) {
  const celsiusTemp = response.data.current.temp_c;
  const roundTemp = Math.round(celsiusTemp);

  const apiUrl = `http://api.weatherapi.com/v1/current.json?key=722bcc523c5840e6a07113521242406&q=stockholm`;
  console.log(axios.get(apiUrl).then(celsiusTemp));
}
console.log(getCountry());
