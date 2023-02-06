import React from "react";

import "./style.css";

function Description({children}) {
    return <div className="myDescription description card-text">{children}</div>
}

export default Description