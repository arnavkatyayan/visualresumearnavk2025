import React from "react";
import ExpensifyLogo from './ExpenseTrackerProjectLogo.jpg';
import VisualResumeLogo from './visual-resume-logo.png';
import DailyScribeLogo from './LogoDailyScribe.png';

function ProjectsPage(props) {
  return (
    <div className="projects-page">

      <div className={`projects fade-down ${props.darkMode ? "skills-each-dark-mode" : ""}`} >
        <div className="logo-name">
          <img src={ExpensifyLogo} className="flexboard-logo expensify-logo" alt="Expensify project" />
          <h4 className="project-names">Expensify</h4>
          <h5 className="project-timeline">(2025-present)</h5>
        </div>
        ...
      </div>

      <div className={`projects fade-up ${props.darkMode ? "skills-each-dark-mode" : ""}`} >
        <div className="logo-name">
          <img src={DailyScribeLogo} className="flexboard-logo expensify-logo" alt="Daily Scribe project" />
          <h4 className="project-names">Daily Scribe</h4>
          <h5 className="project-timeline">(2025)</h5>
        </div>
        ...
      </div>

      <div className={`projects fade-down ${props.darkMode ? "skills-each-dark-mode" : ""}`} >
        <div className="logo-name">
          <img src={VisualResumeLogo} className="flexboard-logo" alt="Visual Resume project" />
          <h4 className="project-names">Visual Resume</h4>
          <h5 className="project-timeline">(2025)</h5>
        </div>
        ...
      </div>

    </div>
  )
}

export default ProjectsPage;
