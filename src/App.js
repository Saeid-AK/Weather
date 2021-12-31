import React,{useContext} from 'react';

import WeatherContainer from './components/WeatherContainer/WeatherContainer';
import { MyContext } from './context';

function App() {
  const context = useContext(MyContext);

  console.log(context.state);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <main className="flex justify-center w-full pt-10 sm:pt-20 md:w-11/12 h-full md:h-5/6 bg-gradient-to-tr from-cyan-800 to-cyan-50 md:rounded-xl">
        <WeatherContainer />
      </main>
    </div>
  );
}

export default App;
