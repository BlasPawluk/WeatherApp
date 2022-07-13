let weather = {
  apiKey: 'ae48f79affb5a83d75b4c417f3c80491',
  fetchWeather: function (ciudad) {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=' +
        ciudad +
        '&units=metric&appid=' +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => {
        this.displayWeather(data);
        console.log(data);
      });
  },
  displayWeather: (data) => {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed);
    document.querySelector('.city').innerText = 'Temperatura en ' + name;
    document.querySelector('.icon').src =
      'https://openweathermap.org/img/wn/' + icon + '.png';
    document.querySelector('.description').innerText = description;
    document.querySelector('.temp').innerText = temp + '°C';
    document.querySelector('.humidity').innerText = humidity + '%';
    document.querySelector('.wind').innerText = speed + 'km/h';
  },
};
