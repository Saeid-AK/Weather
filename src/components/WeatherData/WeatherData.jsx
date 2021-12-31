import React, { useContext } from 'react';

import { MyContext } from '../../context';

const WeatherData = () => {
  const context = useContext(MyContext);

  const weather = context.state.weather;

  const camalize = str => {
    return (' ' + str)
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, function (match, chr) {
        return chr.toUpperCase();
      });
  };

  return (
    <div className="flex-col p-1 sm:p-5">
      <div className="text-2xl">{camalize(weather.description)}</div>
      <div className="mt-2">
        <div className="grid grid-cols-2">
          <div className="flex gap-5">
            <span>Real feel: </span>
            <span>{weather.feels} °</span>
          </div>
          <div className="flex gap-5">
            <span>Humidity: </span>
            <span>{weather.humidity} %</span>
          </div>
          <div className="flex gap-5">
            <span>Wind: </span>
            <span>{weather.wind.speed} KpH</span>
          </div>
          <div className="flex gap-5">
            <span>Pressure: </span>
            <span>{weather.pressure} mb</span>
          </div>
          <div className="flex gap-5">
            <span>Clouds: </span>
            <span>{weather.clouds} %</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherData;
