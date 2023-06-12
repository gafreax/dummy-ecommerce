import React from "react";

import "./style.css";
import { Card } from "react-bootstrap";

interface Props {
    description: string;
}

const Description: React.FC<Props> = ({description}) => {
    return <Card.Text data-testid="description" className="myDescription description card-text">{description}</Card.Text>
}

export default Description