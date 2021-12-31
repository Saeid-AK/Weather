import React, { useContext } from 'react';

import { MyContext } from '../../context';

import GraphData from '../GraphData/GraphData';
import Loading from '../Loading/Loading';
import MainData from '../MainData/MainData';
import SearchBar from '../SearchBar/SearchBar';

const WeatherContainer = () => {
  const context = useContext(MyContext);

  const loading = context.state.loading;

  return (
    <div className="h-screen md:h-1/2 pt-10 sm:p-0">
      <SearchBar />
      {loading ? (
        <Loading>Getting weather data...</Loading>
      ) : (
        <div className="flex-col h-5/6 sm:h-full">
          {!context.state.weather ? (
            <Loading>No City Found(search one for result)</Loading>
          ) : (
            <section className="grid md:flex md:gap-10 h-5/6 p-2 md:px-10 md:py-10">
              <GraphData />
              <MainData />
            </section>
          )}
        </div>
      )}
    </div>
  );
};

export default WeatherContainer;
