import React from 'react';

import './style.css';


function Button({children, onClick}) {
    return <button type="button" onClick={onClick} className="btn btn-light m-2">{children}</button>
}

export default Button;