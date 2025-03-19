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
                            "I am Passionate About Software Development",
                            "I hope you will like my work" 
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
