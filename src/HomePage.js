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
                            "Code. Create. Innovate. Repeat.",
                            "Let's Build Something Amazing!"
                        ],
                        autoStart: true,
                        loop: true, // Enables looping effect
                    }}
                />
               
            
            </div>
        </div>
    );
}

export default HomePage;
