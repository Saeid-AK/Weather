import React from 'react';

import WeatherContainer from './components/WeatherContainer/WeatherContainer';

function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <main className="flex items-center justify-center w-full md:w-11/12 h-full md:h-5/6 bg-gradient-to-tr from-cyan-800 to-cyan-50 md:rounded-xl">
        <WeatherContainer />
      </main>
    </div>
  );
}

export default App;
