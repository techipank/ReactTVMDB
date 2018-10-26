import React from 'react';
import Navigations from '../../Components/Navigations';
import Routes from "../../Routes";

const App = ()=>{
  return (
    <div className="main">
      <Navigations/>
      <div className="">
        <Routes/>
      </div>
    </div>
  );
}
export default App