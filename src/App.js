import 'bootstrap/dist/css/bootstrap.min.css';
import React, { createContext, useState } from 'react';
import Home from './components/Home/Home';

export const infoContext = createContext()

function App() {
  const [info, setInfo] = useState({})

  return (
    <infoContext.Provider value={[info, setInfo]}>
      <>
        <Home></Home>
      </>
    </infoContext.Provider>
  );
}

export default App;
