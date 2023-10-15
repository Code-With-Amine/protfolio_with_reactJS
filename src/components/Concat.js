import React from "react";
import Header from "./Header";
import SocilaMedia from "./SocilaMedia";
import "../style/contact.scss";

function Concat() {
  const snippt =
    "I’m a highly motivated web developer with a great enthusiasm for learning  and solving challenges. I always raise the flag “ in the worst situations I find motivation, in the most desperate situation, I find inspiration”";
  const email = "amineabaidi2003@outlook.com";

  return (
    <div className="container" id="Contact">
      <Header title="Contact" />
      <div className="row contact">
        <div className="col">
          <h1 className="contact--title">Snippet about me</h1>
          <p>{snippt}</p>
        </div>
        <div className="col offset-md-1">
          <h2 className="contact--title">Get In Touch</h2>

          <a
            className="btn p-4 mb-3 d-flex align-items-center justify-content-center contact--emailLink"
            href={`mailto:${email}`}
            role="button"
          >
            Let’s build a project{" "}
            <i
              className="fa-solid fa-arrow-right mx-5"
              style={{ color: "#ffffff", fontSize: "3rem" }}
            ></i>
          </a>
          <p>{email}</p>
        </div>
      </div>
      <SocilaMedia />
    </div>
  );
}

export default Concat;
