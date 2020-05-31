import React from "react";
import { Container, Button } from "shards-react";

const NotFound = ({ ...props }) => (
  <Container fluid className="main-content-container px-4 pb-4">
    <div className="error">
      <div className="error__content">
        <h2>404</h2>
        <h3>Page Not Found !</h3>
        <p>Are searching for something?</p>
        <Button pill onClick={() => props.history.goBack()}>
          &larr; Go Back
        </Button>
      </div>
    </div>
  </Container>
);

export default NotFound;