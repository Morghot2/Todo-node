import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="about">
        {" "}
        <Link to="/">User list</Link>
        <Link to="/admin">Adnim Panel</Link>
      </div>
      This page is only for training purpose - React-Router linking
    </>
  );
};

export default About;
