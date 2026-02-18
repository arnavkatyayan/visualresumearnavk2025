import React from "react";
// import { useState } from "react";
import ExpensifyLogo from './ExpenseTrackerProjectLogo.jpg';
// import FlexBoardLogo from './FlexBoardProjectLogo.png';
import VisualResumeLogo from './visual-resume-logo.png';
import DailyScribeLogo from './LogoDailyScribe.png';

function ProjectsPage(props) {
    return (
        <div className="projects-page">
            {/* 
            <div className={`projects fade-up ${props.darkMode ? "skills-each-dark-mode" : ""}`}>
                <div className="logo-name">
                    <img src={FlexBoardLogo} className="flexboard-logo" />
                    <h4 className="project-names">FlexBoard</h4>
                    <h5 className="project-timeline">(2024-present)</h5>
                </div>
                <h6 className="project-names">(Task & Project Management System)</h6>
                <p className="project-description">FlexBoard is a full-stack Task & Project Management System designed to help individuals and teams stay organized. Built using React, Flask, and PostgreSQL, it provides a seamless and efficient way to manage tasks, track project progress, and collaborate effectively.</p>
                <p className="project-description">🚀 Key Features:</p>
                <ol className="project-features">
                    <li>✅ Task Management – Create, update, and delete tasks with due dates and priorities.</li>
                    <li>✅ Project Organization – Manage multiple projects with different task lists.</li>
                    <li>✅ User Authentication – Secure signup, login, and profile management with change and forget password functionalities.</li>
                    <li>✅ Reward System - Earn coins as you complete tasks and unlock achievements!</li>
                    <li>✅ Recurring Tasks – Automate task repetition for recurring activities.</li>
                </ol>
                <p className="project-description">🛠️ Tech stack:</p>
                <ul className="project-features">
                    <li><b>Frontend:</b> JavaScript, React, CSS, Bootstrap</li>
                    <li><b>Backend:</b> Python, Flask</li>
                    <li><b>Database:</b> PostgreSQL</li>
                    <li><b>Data Science and Machine learning:</b> Numpy, Pandas, scikit-learn</li>
                    <li><b>Version Control:</b> Git, GitHub</li>
                    <li><b>Libraries:</b> openpyxl, psycopg2, axios, sweetalert, react-player</li>
                </ul>
                <p className="project-description">
                    GitHub: <a href="https://github.com" target="_blank" rel="noopener noreferrer"> FlexBoardApp Repository </a>
                </p>
            </div> 
            */}

            <div className={`projects fade-down ${props.darkMode ? "skills-each-dark-mode" : ""}`}>
                <div className="logo-name">
                    <img src={ExpensifyLogo} className="flexboard-logo expensify-logo" alt="Expensify"/>
                    <h4 className="project-names">Expensify</h4>
                    <h5 className="project-timeline">(2025-present)</h5>
                </div>
                <h6 className="project-names">(Smart Financial Management)</h6>
                <p className="project-description">The Expense Tracker is a full-stack web application that helps users efficiently manage their daily expenses and track their financial health. Built using React, Spring Boot, and PostgreSQL, it offers a user-friendly interface with insightful analytics.</p>
                <p className="project-description">🚀 Key Features:</p>
                <ol className="project-features">
                    <li>💰 Add & Categorize Transactions – Record income and expenses with category and emoji tagging.</li>
                    <li>📈 Visual Analytics – Line and bar graphs to visualize trends over time (monthly, weekly, by source).</li>
                    <li>🔄 Filter, Sort & Search – View entries by date, category, or amount with dynamic filters.</li>
                    <li>🔐 Secure Auth – Role-based access, password encryption (Jasypt), and forgot-password support.</li>
                    <li>📩 Export & Download – Download income/expense data in Excel via pandas.</li>
                    <li>📤 Local Storage & Email Integration – Save data locally or send snapshots via email.</li>
                    <li>🔁 Recurring Payments – Automate monthly bills and subscriptions with reminders.</li>
                </ol>
                <p className="project-description">🛠️ Tech stack:</p>
                <ul className="project-features">
                    <li><b>Frontend:</b> JavaScript, React, Vanilla CSS, Tailwind CSS, Bootstrap, React-Router</li>
                    <li><b>Backend:</b> Java, Spring Boot, Hibernate</li>
                    <li><b>Database:</b> PostgreSQL</li>
                    <li><b>Data Science and Machine learning:</b> Flask, Numpy, Pandas, scikit-learn</li>
                    <li><b>Visualization Libraries:</b> Chart.js, React-Chartjs-2</li>
                    <li><b>Version Control:</b> Git, GitHub</li>
                    <li><b>Other Libraries:</b> axios, SweetAlert2</li>
                </ul>
                <p className="project-description github">
                    GitHub: <a href="https://github.com" target="_blank" rel="noopener noreferrer"> Expensify Repository </a>
                </p>
            </div>

            <div className={`projects fade-up ${props.darkMode ? "skills-each-dark-mode" : ""}`}>
                <div className="logo-name">
                    <img src={DailyScribeLogo} className="flexboard-logo expensify-logo" alt="Daily Scribe"/>
                    <h4 className="project-names">Daily Scribe</h4>
                    <h5 className="project-timeline">(2025)</h5>
                </div>
                <h6 className="project-names">(Journaling Tool)</h6>
                <p className="project-description">
                    Daily Scribe is a full-stack journaling web application designed to help users reflect, track, and document their daily thoughts and moods with ease. Built with React, Spring Boot, and PostgreSQL, it provides a secure and intuitive environment for consistent personal journaling.
                </p>
                <p className="project-description">🚀 Key Features:</p>
                <ol className="project-features">
                    <li>✍️ Write Daily Journals – Save date-wise entries with title and body.</li>
                    <li>📝 Effortless Journal Management – Easily view, edit, and delete past journal entries with a clean interface.</li>
                    <li>🔐 Encryption – Option to encrypt journal PDFs with custom passwords.</li>
                    <li>🔍 Sort & Search – Quickly locate entries by date, keyword, or title.</li>
                    <li>📤 Export Journals – Generate encrypted PDFs with custom filenames.</li>
                </ol>
                <p className="project-description">🛠️ Tech stack:</p>
                <ul className="project-features">
                    <li><b>Frontend:</b> JavaScript, React, CSS, Bootstrap, React-Router</li>
                    <li><b>Backend:</b> Java, Spring Boot, Hibernate</li>
                    <li><b>Database:</b> PostgreSQL</li>
                    <li><b>Version Control:</b> Git, GitHub</li>
                    <li><b>Libraries:</b> SweetAlert2, axios, jasypt, Apache PDFBox/iText, typewriter-effect</li>
                </ul>
                <p className="project-description github">
                    GitHub: <a href="https://github.com" target="_blank" rel="noopener noreferrer"> Daily Scribe Repository </a>
                </p>
            </div>

            <div className={`projects fade-down ${props.darkMode ? "skills-each-dark-mode" : ""}`}>
                <div className="logo-name">
                    <img src={VisualResumeLogo} className="flexboard-logo" alt="Visual Resume"/>
                    <h4 className="project-names">Visual Resume</h4>
                    <h5 className="project-timeline">(2025)</h5>
                </div>
                <h6 className="project-names">(A dynamic visual representation of my skills, experience, and projects.)</h6>
                <p className="project-description">
                    Visual Resume is a modern, fully responsive personal portfolio designed to showcase my professional journey. Built using React and hosted on Vercel, it allows recruiters and connections to quickly view my background, skills, and project highlights at a glance.
                </p>
                <p className="project-description">🚀 Key Features:</p>
                <ol className="project-features">
                    <li>✅ Clean and professional UI with light and dark mode support.</li>
                    <li>✅ Section-wise organized resume including Home, About, Projects, DSA Journey, and Contact Me.</li>
                    <li>✅ Resume Download/view functionality and quick external profile links integration (GitHub, LinkedIn).</li>
                    <li>✅ Deployed the app using Vercel for quick, global access.</li>
                    <li>✅ Smooth animations and transitions to enhance user experience.</li>
                </ol>
                <p className="project-description">🛠️ Tech Stack:</p>
                <ul className="project-features">
                    <li><b>Frontend:</b> JavaScript, React, CSS, Bootstrap</li>
                    <li><b>Hosting/Deployment:</b> Vercel</li>
                    <li><b>Version Control:</b> Git, GitHub</li>
                    <li><b>Libraries:</b> sweetalert, typewriter-effect, react-switch</li>
                </ul>
                <p className="project-description">
                    GitHub: <a href="https://github.com" target="_blank" rel="noopener noreferrer"> Visual Resume Repository </a>
                </p>
            </div>
        </div>
    );
}

export default ProjectsPage;
