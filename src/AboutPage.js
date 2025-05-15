import React from "react";
import MyPicture from './ArnavKatyayanPic.jpg'
import { Button } from "react-bootstrap";
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
            category: "DevOps / Hosting",
            technologies: ["Git", "GitHub", "Jira", "Bitbucket", "Vercel", "Render"]
        },
        {
            category: "Data Analysis / Visualization / ML",
            technologies: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "scikit-learn"]
        }
    ];


    return (
        <div className="about-page">
            <div className="picture-experience">
                <div className="picture-resume-btn">
                <img src={MyPicture} className="my-picture" />
                   
                    <Button variant="info" onClick={() => window.open("/ArnavK2025Resume.pdf", "_blank")}>
                        View Resume
                    </Button>
                    <a href="/ArnavK2025Resume.pdf" download>
                        <Button variant="success" className="download-resume">Download Resume</Button>
                    </a>

                   </div>
                <div className={`my-experience ${props.darkMode ? "skills-each-dark-mode" : ""}`}>
                    <h2><u>Education</u></h2>
                    <h4>🎓 Bachelor of Technology in Computer Science and Engineering</h4>
                    <h5>Lovely Professional University (LPU) | 2017 – 2021 | Jalandhar, IN</h5>

                    <h2><u>Project</u></h2>
                    <h4>🖥️ Pixel Perfect – Full Stack Development</h4>
                    <h5>USEReady | Nov 2021 – Present | Gurugram, IN</h5>
                    <h5><b>Key Clients:</b> FIS, BPI, Morgan Stanley, CITI, DCSS</h5>
                    <p>
                        <b>Description:</b> Pixel Perfect by USEReady is a high-precision reporting solution that generates print-ready,
                        well-formatted reports within Tableau dashboards. Designed for industries requiring accurate audit and compliance
                        documentation, it ensures data precision and design consistency. The project enables enterprises to create branded,
                        regulatory-compliant reports, transforming analytics into actionable insights.
                    </p>

                    <h2><u>Experience</u></h2>

                    <h4>📅 Software Engineer (November 2021 – March 2024)</h4>
                    <ul>
                        <li>Developed multiple SFTP transfer features to enhance data handling efficiency.</li>
                        <li>Improved UI components to deliver a better user experience and performance.</li>
                        <li>Implemented lazy loading to boost application performance.</li>
                        <li>Received the <b>Spot Award in Nov 2022</b> for outstanding contributions.</li>
                    </ul>

                    <h4>📅 Senior Software Engineer (April 2024 – Present)</h4>
                    <ul>
                        <li>
                            Led the product migration project for FIS, ensuring seamless data transition,
                            minimal downtime, and optimized system performance.
                        </li>
                        <li>
                            Developed MVPs for BPI and DCSS, taking end-to-end ownership of architecture,
                            design, and implementation while collaborating closely with stakeholders to refine requirements.
                        </li>
                        <li>
                            Mentored new team members by providing technical guidance, conducting knowledge-sharing sessions,
                            and fostering a collaborative, growth-oriented environment.
                        </li>
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