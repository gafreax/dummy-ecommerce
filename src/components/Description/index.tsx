import React from "react";

import "./style.css";
import { Card } from "react-bootstrap";

interface Props {
    children: JSX.Element
}

const Description: React.FC<Props> = ({children}) => {
    return <Card.Text data-testid="description" className="myDescription description card-text">{children}</Card.Text>
}

export default Description