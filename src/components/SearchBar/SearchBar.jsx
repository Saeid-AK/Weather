import React, { useState, useContext, useRef } from 'react';

import { MyContext } from '../../context';

const SearchBar = () => {
  const context = useContext(MyContext);
  const [value, setValue] = useState('');

  const onSubmit = e => {
    if (e.key === 'Enter') {
      context.setState({ loading: true });
      context.searchOnClick(value);
    }
  };

  const onChange = e => {
    setValue(e.target.value);
  };

  return (
    <div className="w-72 sm:w-96 m-auto">
      <input
        type="search"
        required
        onKeyDown={onSubmit}
        onInput={onChange}
        placeholder="Search another City\Country..."
        className="border-2 border-gray-300 bg-white w-11/12 h-10 pr-5 px-5 rounded-lg text-sm focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;
