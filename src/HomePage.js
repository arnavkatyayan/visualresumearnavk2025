import React from "react";
import Typewriter from "typewriter-effect";

function HomePage() {
    return (
        <div className="home-page-css">
            <div className="typewriter-effects"> 
                <Typewriter
                    options={{
                        strings: [
                            "Hello! My name is Arnav Katyayan.",
                            "Welcome to my Visual Resume.",
                            "I'm a passionate Full-Stack Developer and DSA enthusiast.",
                            "Please navigate using the options above to explore my journey.",
                            "Let's build something amazing together!"
                        ],
                        autoStart: true,
                        loop: true,
                        pauseFor: 500,
                        delay: 65,
                        deleteSpeed: 5,   
                    }}
                />
               
            
            </div>
        </div>
    );
}

export default HomePage;
