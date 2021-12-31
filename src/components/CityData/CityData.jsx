import React, { useContext } from 'react';

import { MyContext } from '../../context';

let time;
let date;
const getDate = () => {
  let daysList = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

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
    'Oct',
    'Nov',
    'Dec',
  ];

  const today = new Date();
  let month = monthsList[today.getMonth()];
  let year = today.getFullYear();
  let dayDate = today.getDate();
  let day = daysList[today.getDay()];
  let hour = `${today.getHours()}`.padStart(2, 0);
  let minutes = `${today.getMinutes()}`.padStart(2, 0);

  time = { hour: hour, minutes: minutes };
  date = { month: month, year: year, day: day, dayDate: dayDate };
};

getDate();

const CityData = () => {
  const context = useContext(MyContext);
  const state = context.state;
  let weather = state.weather;

  return (
    <div className="flex justify-between md:text-xl w-72 sm:w-96 py-1 md:w-full border-b border-black">
      <div>
        {weather.cityName}, {weather.country}
      </div>
      <div className="text-gray-600">
        {date.day}, {date.month} {date.dayDate}
        <span className="ml-5">
          {time.hour}:{time.minutes}
        </span>
      </div>
    </div>
  );
};

export default CityData;
