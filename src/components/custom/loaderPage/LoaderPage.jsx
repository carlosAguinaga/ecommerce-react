import React from "react";
import { Spinner } from "react-bootstrap";
import "./LoaderPage.styles.css";

const LoaderPage = () => {
  return (
    <div className="loader-page">
      <Spinner animation="border" variant="danger" />
    </div>
  );
};

export default LoaderPage;
