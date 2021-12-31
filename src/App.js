import React, { useContext, useEffect } from 'react';

import { MyContext } from './context';

import WeatherContainer from './components/WeatherContainer/WeatherContainer';
import Cities from './components/Cities/Cities';

function App() {
  const context = useContext(MyContext);

  const state = context.state;

  console.log(context.state);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <main className="flex-col w-full md:w-11/12 h-full md:h-5/6 bg-gradient-to-tr from-cyan-800 to-cyan-50 md:rounded-xl">
        <Cities />
        <WeatherContainer />
      </main>
    </div>
  );
}

export default App;
