let weather = {
  apiKey: 'ae48f79affb5a83d75b4c417f3c80491',
  fetchWeather: function () {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=Paris&units=metricappid=ae48f79affb5a83d75b4c417f3c80491'
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  },
};
