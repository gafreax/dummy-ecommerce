import React from "react";

import { Card, Placeholder } from "react-bootstrap";

import "./style.css";

function GhostCard() {
  return (
    <Card style={{ width: "18rem", padding: "1rem" }}>
      <div animation="glow" className="rounded" style={{ marginBottom: "1rem", height: "300px", backgroundColor: "#282c34"}}></div>
      <Placeholder as={Card.Title} animation="glow">
        <Placeholder xs={6} />
      </Placeholder>
      <Placeholder as={Card.Text} animation="glow">
        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
        <Placeholder xs={6} /> <Placeholder xs={8} />
      </Placeholder>
      <Placeholder.Button variant="primary" xs={6} />
    </Card>
  );
}

export default GhostCard;
