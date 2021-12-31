import React, { useContext } from 'react';

import { MyContext } from '../../context';

const GraphData = () => {
  const context = useContext(MyContext);
  const weather = context.state.weather;

  return (
    <div className="flex-col h-1/2 self-center m-10 text-gray-800 cursor-default">
      <div className="flex justify-center">
        <img className="w-24" src={weather.icon} alt="weather-ic" />
        <div className="flex-col text-7xl self-center relative">
          <span>{weather.curTemp}°C</span>
          <div className="flex justify-center text-xl absolute">
            <span>↑{weather.maxTemp}°</span>
            <span>↓{weather.minTemp}°</span>
          </div>
          <div className="text-xl font-bold absolute bottom-20">
            {weather.main}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphData;
