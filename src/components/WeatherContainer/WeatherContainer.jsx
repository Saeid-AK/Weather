import React, { useContext } from 'react';

import { MyContext } from '../../context';

import GraphData from '../GraphData/GraphData';
import Loading from '../Loading/Loading';
import MainData from '../MainData/MainData';

const WeatherContainer = () => {
  const context = useContext(MyContext);

  const loading = context.state.loading;

  return (
    <div className="h-full md:h-1/2">
      {loading ? (
        <Loading />
      ) : (
        <section className="grid md:flex justify-around md:gap-5 h-full p-2 md:px-20 md:py-20">
          <GraphData />
          <MainData />
        </section>
      )}
    </div>
  );
};

export default WeatherContainer;
