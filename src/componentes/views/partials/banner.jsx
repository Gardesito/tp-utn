import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <a href="">
          <Link to="/login">Registrate totalmente Gratis 🤑</Link>
        </a>
      </div>
    </>
  );
};

export { Banner };
