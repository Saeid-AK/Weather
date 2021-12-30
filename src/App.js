import React, { useContext, useEffect } from 'react';

import { MyContext } from './context';

function App() {
  const context = useContext(MyContext);

  console.log(context.state);

  return <div></div>;
}

export default App;
