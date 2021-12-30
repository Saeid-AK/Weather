import React, { createContext, useState, useEffect } from 'react';

const MyContext = createContext();

const GEOCOD_API_KEY = '24a2ee7f2bd24fce9fe0996baf43acf4';
const WEATHER_API_KEY = 'e603bcdd5b1da3bc3e1696829b376047';

const MyProvider = props => {
  const [state, setState] = useState({
    loading: true,
    date: {},
    weather: {},
  });

  let date;
  let time;
  const getDate = () => {
    let daysList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let monthsList = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Aug',
      'Oct',
      'Nov',
      'Dec',
    ];

    const today = new Date();
    let month = monthsList[today.getMonth()];
    let year = today.getFullYear();
    let dayDate = today.getDay();
    let day = daysList[today.getDay()];
    let hour = today.getHours();
    let minutes = today.getMinutes();

    time = { hour: hour, minutes: minutes };
    date = { month: month, year: year, day: day, dayDate: dayDate };
  };

  const getLoc = position => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${lat},${lng}&key=${GEOCOD_API_KEY}
    `)
      .then(response => response.json())
      .then(data => {
        const curCity = data.results[0].components.city.toLowerCase();
        getWeather(curCity);
      });
  };

  const getCoords = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getLoc, console.error);
    }
  };

  const getWeather = curCity => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${curCity}&exclude=hourly,daily&appid=${WEATHER_API_KEY}`
    )
      .then(response => response.json())
      .then(data =>
        setState({
          ...state,
          loc: curCity,
          date: { date, time: time },
          weather: {
            data,
            main: data.weather[0].main,
            cityName: data.name,
            country: data.sys.country,
            feels: Math.round(data.main.feels_like - 273.15),
            curTemp: Math.round(data.main.temp - 273.15),
            minTemp: Math.round(data.main.temp_min - 273.15),
            maxTemp: Math.round(data.main.temp_max - 273.15),
            humidity: data.main.humidity,
            wind: { speed: data.wind.speed, deg: data.wind.deg },
          },
        })
      );
  };

  // K − 273.15 = °C

  useEffect(() => {
    getDate();
    getCoords();
  }, []);

  return (
    <MyContext.Provider
      value={{
        state: state,
        getWeather: getWeather,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export { MyProvider, MyContext };
