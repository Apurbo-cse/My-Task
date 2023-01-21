import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer fixed-bottom text-center bg-light shadow">
          © 2022 Copyright:
          <Link className="text-dark" to="/">
            mytask@info.code
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
