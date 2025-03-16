import React from "react";
import MyPicture from './ArnavKatyayanPic.jpg'

function AboutPage(props) {
    const skills = [
        {
            category: "Programming Languages",
            technologies: ["C++", "Java", "JavaScript", "Python", "Data Structures & Algorithms"]
        },
        {
            category: "Frontend Development",
            technologies: ["HTML", "CSS", "React", "Bootstrap", "Redux"]
        },
        {
            category: "Backend Development",
            technologies: ["Spring Boot", "Flask", "Hibernate", "RESTful APIs"]
        },
        {
            category: "Database",
            technologies: ["MySQL", "PostgreSQL"]
        },
        {
            category: "DevOps / Atlassian Tools",
            technologies: ["Git", "Jira", "Bitbucket"]
        },
        {
            category: "Data Analysis / Visualization",
            technologies: ["NumPy", "Pandas", "Matplotlib", "Seaborn"]
        }
    ];


    return (
        <div className="about-page">
            <div className="picture-experience">
                <img src={MyPicture} className="my-picture" />

                <div className={`my-experience ${props.darkMode ? "skills-each-dark-mode" : ""}`}>

                    <h2><u>Education</u></h2>
                    <h4>🎓 Bachelor of Technology, Computer Science Engineering</h4>
                    <h5>Lovely Professional University (LPU) | 2017 - 2021 | Jalandhar, IN</h5>
                    <p><b>CGPA:</b> 7.43</p>
                    <h2><u>Experience</u></h2>
                    <h4>📅 Software Engineer (Nov 2021 – April 2024)</h4>
                    <ul>
                        <li>Developed multiple SFTP transfer features to enhance data handling.</li>
                        <li>Improved UI components for better user experience and performance.</li>
                        <li>Implemented lazy loading to optimize application performance.</li>
                        <li>Awarded <b>Spot Award in Nov 2022</b> for outstanding contributions.</li>
                    </ul>
                    <h4>📅 Senior Software Engineer (April 2024 – Present)</h4>
                    <ul>
                        <li>Led the product migration project for FIS, ensuring seamless data transition, minimal downtime, and optimized system performance.</li>
                        <li>Developed an MVP for BPI, taking end-to-end ownership of the architecture, design, and implementation while collaborating closely with stakeholders to refine requirements.</li>
                        <li>Mentored new team members by providing technical guidance, conducting knowledge-sharing sessions, and fostering a collaborative and growth-oriented environment.</li>

                    </ul>

                </div>

            </div>

            <div className="skills">
                {skills.map((skill) => (
                    <div className={`skills-each ${props.darkMode ? "skills-each-dark-mode" : ""}`} key={skill.category} >
                        <h5><u>{skill.category}</u></h5>
                        <ul>
                            {skill.technologies.map((tech, index) => (
                                <li key={index}>{tech}</li>
                            ))}
                        </ul>

                    </div>
                ))}
            </div>


        </div>
    )
}
export default AboutPage;