import React from "react";


function DsAlgoPage(props) {
    return (
        <div className="ds-algo-page">
            <div className="ds-box left-box"></div>   {/* Moves left */}
            <div className="ds-box right-box"></div>  {/* Moves right */}
            <div className="vertical-line"></div>      {/* Vertical line */}
            <div className="ds-box left-box"></div>   {/* Moves left again */}
        </div>
    );
}

export default DsAlgoPage;
