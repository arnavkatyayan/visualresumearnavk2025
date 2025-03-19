import React from "react";
 import LeetcodeBadges from './LeetcodeBadgesUpdate.png';
import LeetcodeSubmissions from './LeetcodeSubmissions.png';
import LeetcodeQuestions from './LeetcodeQuestions.png';
import HackerankBadges from './HackerrankBadges.png';
import GFG from './gfgImageInfo.png';
import GFGProblems from './gfgProblems.png';
function DsAlgoPage(props) {
    return (
        <div className="ds-algo-page">
            {/* LeetCode Block */}
            <div className={`ds-box ${props.darkMode ? "skills-each-dark-mode" : ""} left-box`}>
                <div className="dsa-box-animation">
                    <div className="dsa-icons-label">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" className="dsa-icons" />
                        <h6 className="dsa-labels">LeetCode</h6>
                    </div>
                    <div className="leetcode-badges-questions">
                    <img src={LeetcodeBadges} className="leetcode-badges"/>
                    <img src={LeetcodeQuestions} className="leetcode-badges"/>
                    </div>
                </div>
            </div>

            {/* GeeksforGeeks Block */}
            <div className={`ds-box ${props.darkMode ? "skills-each-dark-mode" : ""} right-box`}>
                <div className="dsa-box-animation">
                    <div className="dsa-icons-label">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg" alt="GeeksforGeeks" className="dsa-icons" />
                        <h6 className="dsa-labels">GeeksforGeeks</h6>           
                    </div>
                    <div className="leetcode-badges-questions">
                    <img src={GFG} className="gfg-image"/>
                    <img src = {GFGProblems} className="gfg-image"/>
                    </div>
                </div>
            </div>

            <div className="vertical-line"></div>

            {/* HackerRank Block */}
            <div className={`ds-box ${props.darkMode ? "skills-each-dark-mode" : ""} left-box`}>
                <div className="dsa-box-animation">
                    <div className="dsa-icons-label">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png" alt="HackerRank" className="dsa-icons" />
                        <h6 className="dsa-labels">HackerRank</h6> 
                    </div>
                    <img src={HackerankBadges} className="hackerrank-image"/>
                </div>
            </div>
        </div>
    );
}

export default DsAlgoPage;
