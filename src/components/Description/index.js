import React from "react";

import "./style.css";

function Description({children}) {
    return <div  data-testid="description" className="myDescription description card-text">{children}</div>
}

export default Description