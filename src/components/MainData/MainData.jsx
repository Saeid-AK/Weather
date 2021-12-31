import React from 'react';

import CityData from '../CityData/CityData';
import WeatherData from '../WeatherData/WeatherData';

const MainData = () => {
  return (
    <div className="flex-col h-full mt-10 sm:m-0 sm:px-2 md:w-2/3">
      <CityData />
      <WeatherData />
    </div>
  );
};

export default MainData;
