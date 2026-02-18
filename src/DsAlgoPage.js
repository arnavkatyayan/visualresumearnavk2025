import React from "react";
import LeetcodeQuestions from './LeetcodeQuestions.png';
import LeetcodeBadges from './LeetcodeBadgesNew.png'
import HackerankBadges from './HackerrankBadges.png';
import GFG from './gfgImageInfo.png';
import GFGProblems from './gfgProblems.png';

function DsAlgoPage(props) {
  return (
    <div className="ds-algo-page">

      <div className={`ds-box ${props.darkMode ? "skills-each-dark-mode" : ""} left-box`}>
        <div className="dsa-box-animation">
          <div className="dsa-icons-label">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" 
              alt="LeetCode" 
              className="dsa-icons" 
            />
            <h6 className="dsa-labels">LeetCode</h6>
          </div>
          <div className="leetcode-badges-questions">
            <img src={LeetcodeBadges} className="leetcode-badges" alt="LeetCode badges" />
            <img src={LeetcodeQuestions} className="leetcode-badges" alt="LeetCode questions" />
          </div>
        </div>
      </div>

      <div className={`ds-box ${props.darkMode ? "skills-each-dark-mode" : ""} right-box`}>
        <div className="dsa-box-animation">
          <div className="dsa-icons-label">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg" 
              alt="GeeksforGeeks" 
              className="dsa-icons" 
            />
            <h6 className="dsa-labels">GeeksforGeeks</h6>           
          </div>
          <div className="leetcode-badges-questions">
            <img src={GFG} className="gfg-image" alt="GeeksforGeeks profile" />
            <img src={GFGProblems} className="gfg-image" alt="GeeksforGeeks problems" />
          </div>
        </div>
      </div>

      <div className="vertical-line"></div>

      <div className={`ds-box ${props.darkMode ? "skills-each-dark-mode" : ""} left-box`}>
        <div className="dsa-box-animation">
          <div className="dsa-icons-label">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png" 
              alt="HackerRank" 
              className="dsa-icons" 
            />
            <h6 className="dsa-labels">HackerRank</h6> 
          </div>
          <img src={HackerankBadges} className="hackerrank-image" alt="HackerRank badges" />
        </div>
      </div>

    </div>
  );
}

export default DsAlgoPage;
