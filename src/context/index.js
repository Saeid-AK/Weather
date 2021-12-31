import React, { createContext, useState, useEffect } from 'react';

const MyContext = createContext();

const GEOCOD_API_KEY = '24a2ee7f2bd24fce9fe0996baf43acf4';
const WEATHER_API_KEY = 'e603bcdd5b1da3bc3e1696829b376047';

const MyProvider = props => {
  const [state, setState] = useState({
    loading: true,
    err: '',
    weather: {},
  });

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
      `http://api.openweathermap.org/data/2.5/weather?q=${curCity}&units=metric&exclude=hourly,daily&appid=${WEATHER_API_KEY}`
    )
      .then(response => response.json())
      .then(data =>
        setState({
          ...state,
          loading: false,
          loc: curCity,
          weather: {
            data,
            main: data.weather[0].main,
            description: data.weather[0].description,
            cityName: data.name,
            country: data.sys.country,
            icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
            feels: Math.round(data.main.feels_like),
            curTemp: Math.round(data.main.temp),
            minTemp: Math.round(data.main.temp_min),
            maxTemp: Math.round(data.main.temp_max),
            humidity: data.main.humidity,
            wind: { speed: data.wind.speed, deg: data.wind.deg },
            clouds: data.clouds.all,
            pressure: data.main.pressure,
          },
        })
      );
  };

  // K − 273.15 = °C

  useEffect(() => {
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
