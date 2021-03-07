import React from "react";
import Topnav from "./components/Topnav";
import ParticleBackground from "./components/PatricleBackground";

function App() {

    return (
        <div>
            <Content />
            <ParticleBackground />
        </div>
    );
}

function Content() {
    return (<div style={{position: 'absolute'}} className='container '>
        <Topnav/>
    </div>)
}

export default App
