import 'bootstrap/dist/css/bootstrap.min.css';
import React, { createContext, useState } from 'react';

import HomePage from './components/Pages/HomePage';

export const infoContext = createContext()

function App() {
  const [info, setInfo] = useState({})

  return (
    <infoContext.Provider value={[info, setInfo]}>
      <>
        <HomePage></HomePage>
      </>
    </infoContext.Provider>
  );
}

export default App;
