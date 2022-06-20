import React from "react";
import NotHomeButton from "./NotHomeButton";
import Home from "./Home.jsx";
import AboutUs from "./AboutUs";


function App(){
    const [isHome,setHome] = React.useState(true);
    const [isAboutUs,setAboutUs] = React.useState(false);

    return (
        <div>

        <Home isHome={isHome} setHome={setHome} isAboutUs={isAboutUs} setAboutUs={setAboutUs}/>
        <AboutUs isAboutUs={isAboutUs} setAboutUs={setAboutUs} isHome={isHome} setHome={setHome}/>
        
        </div>
    );
}

export default App;




