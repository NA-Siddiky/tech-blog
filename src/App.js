import 'bootstrap/dist/css/bootstrap.min.css';
import React, { createContext, useState } from 'react';
import Home from './components/Home/Home';


export const infoContext = createContext()

function App() {
  const [info, setInfo] = useState({})
  const contextData = {
    info,
    setInfo,
  }

  return (
    <infoContext.Provider value={contextData}>
      <>
        <Home></Home>
      </>
    </infoContext.Provider>
  );
}

export default App;
