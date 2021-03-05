import React from "react";
import Topnav from "./components/Topnav";

function App() {

  return (
    <div className='container'>
      <Topnav sections={['Home', 'Projects', 'Courses', 'Contact Me', 'Hire Me']} />
    </div>
  );
}

export default App
