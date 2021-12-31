import React from 'react';

const Loading = props => {
  return (
    <div className="flex justify-center items-center sm:text-xl h-5/6 md:h-full">
      {props.children}
    </div>
  );
};

export default Loading;
