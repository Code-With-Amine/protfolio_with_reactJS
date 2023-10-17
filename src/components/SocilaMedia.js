import React from "react";
import earthLogo from "../assets/images/earth.png";

function SocilaMedia() {
  const mailMe = 'mailto:amineabaidi2003@outlook.com';
  return (
    <div className="contactMedia mt-5 mx-lg-3">
      <img
        className="contactMedia--centeredImag"
        src={earthLogo}
        alt="earth logo"
      />

      <a
        className="btn"
        rel="noreferrer"
        href="https://www.linkedin.com/in/amine-abaidi-715244240/"
        target="_blank"
      >
        <i
          className="contactMedia--linkdine fa-brands fa-linkedin"
          style={{ color: "#0561ff" }}
        ></i>
      </a>
      <a
        className="btn"
        rel="noreferrer"
        href="https://codewithamine.hashnode.dev/"
        title="Hashnode"
        target="_blank"
      >
        <i
          className="contactMedia--hashnode fa-brands fa-hashnode"
          style={{ color: "#0029f5" }}
        ></i>
      </a>
      <a className="btn" title={mailMe.substring(7)} href={mailMe} >
        <i
          className="contactMedia--email fa-solid fa-envelope"
          style={{ color: "#f2f2f2" }}
        ></i>
      </a>

      <a
        className="btn"
        rel="noreferrer"
        href="https://github.com/Code-With-Amine?tab=repositories"
        target="_blank"
      >
        <i
          className="contactMedia--github fa-brands fa-github"
          style={{ color: "#be1313" }}
        ></i>
      </a>
    </div>
  );
}

export default SocilaMedia;
