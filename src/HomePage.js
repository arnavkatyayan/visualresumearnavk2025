import React from "react";
import Typewriter from "typewriter-effect";

function HomePage() {
    return (
        <div className="home-page-css">
            <div className="typewriter-effects"> 
                <Typewriter
                    options={{
                        strings: [
                            "Hello! My name is Arnav Katyayan",
                            "Welcome To my Visual-Resume",
                            "Please navigate by clicking above actions and get to know more"
                        ],
                        autoStart: true,
                        loop: true,
                    }}
                />
               
            
            </div>
        </div>
    );
}

export default HomePage;
