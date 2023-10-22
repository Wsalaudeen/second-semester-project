import React from "react";
import Navigation from "../components/navigation";
import { Link } from "react-router-dom";
import ErrorImage from "../images/images.png";

const Error = () => {
  return (
    <>
      <section className="home-container">
        <Navigation />
        <div className="error-container">
          <h1 className="error-title">Sorry,Contact Page Not Found!</h1>
          <div className="error-img">
            <img src={ErrorImage} alt="Error-404" />
          </div>
          <div className="error-btn">
            <Link to="/" className="btn">
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
export default Error;
