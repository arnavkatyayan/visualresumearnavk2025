import React from "react";
import { useState } from "react";
import ExpensifyLogo from './ExpenseTrackerProjectLogo.jpg';
import FlexBoardLogo from './FlexBoardProjectLogo.png';
function ProjectsPage(props) {


    return (
        <div className="projects-page">
            <div className={`projects fade-up ${props.darkMode ? "skills-each-dark-mode" : ""}`} >
                <div className="logo-name">
                    <img src={FlexBoardLogo} className="flexboard-logo" />
                    <h4 className="project-names">FlexBoard</h4>
                </div>
                <h6 className="project-names">(Task & Project Management System)</h6>
                <p className="project-description">FlexBoard is a full-stack Task & Project Management System designed to help individuals and teams stay organized. Built using React, Flask, and PostgreSQL, it provides a seamless and efficient way to manage tasks, track project progress, and collaborate effectively.</p>
                <p className="project-description">🚀 Key Features:</p>
                <ol className="project-features">
                    <li>✅ Task Management – Create, update, and delete tasks with due dates and priorities.</li>
                    <li>✅ Project Organization – Manage multiple projects with different task lists.</li>
                    <li>✅ User Authentication – Secure signup, login, and profile management.</li>
                    <li>✅ Reward System - Earn coins as you complete tasks and unlock achievements!</li>
                    <li>✅ Recurring Tasks – Automate task repetition for recurring activities.</li>
                </ol>
                <p className="project-description">🛠️ Tech stack:</p>
                <ul className="project-features">

                    <li><b>Frontend:</b> JavaScript, React, CSS, Bootstrap</li>
                    <li><b>Backend:</b> Python, Flask, Pandas</li>
                    <li><b>Database:</b> PostgreSQL</li>
                </ul>
                <p className="project-description">
                    GitHub: <a href="https://github.com/arnavkatyayan/FlexBoardApp" target="_blank" rel="noopener noreferrer">
                        FlexBoardApp Repository
                    </a>
                </p>
            </div>
            <div className={`projects fade-down ${props.darkMode ? "skills-each-dark-mode" : ""}`} >
                <div className="logo-name">
                    <img src={ExpensifyLogo} className="flexboard-logo expensify-logo" />
                    <h4 className="project-names">Expensify</h4>
                </div>
                <h6 className="project-names">(Smart Financial Management)</h6>
                <p className="project-description">The Expense Tracker is a full-stack web application that helps users efficiently manage their daily expenses and track their financial health. Built using React, Spring Boot, and PostgreSQL, it offers a user-friendly interface with insightful analytics.</p>
                <p className="project-description">🚀 Key Features:</p>
                <ol className="project-features">
                    <li>💰 Add & Categorize Expenses – Record transactions with category tags.</li>
                    <li>📅 Recurring Transactions – Automate monthly bills and income tracking..</li>
                    <li>🔐 User Authentication – Secure login and role-based access with password decryption and forget password features.</li>
                    <li>🔄 Expense Filtering & Sorting – View expenses by category, date, or amount.</li>
                    <li>📩 Seamless expense data transfer via email and local storage.</li>
                </ol>
                <p className="project-description">🛠️ Tech stack:</p>
                <ul className="project-features">

                    <li><b>Frontend:</b> JavaScript, React, CSS, Bootstrap</li>
                    <li><b>Backend:</b> Java, Spring Boot, Hibernate</li>
                    <li><b>Database:</b> PostgreSQL</li>  

                </ul>
                <p className="project-description github">
                    GitHub: <a href="https://github.com/arnavkatyayan/ExpenseTrackerApp" target="_blank" rel="noopener noreferrer">
                        Expensify Repository
                    </a>
                </p>
            </div>
        </div>
    )
} export default ProjectsPage;