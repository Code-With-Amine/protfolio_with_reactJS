import React from "react";
import { Methodes } from "../assets/data/methodology";
import "../style/Methods.scss";

function Methodologies() {
  return (
    <div className="p-5">
      <h1 className="text-center p-5 Title">My Methodologies</h1>
      <div className="methods row justify-content-center gap-5">
        {Methodes.map((method, index) => (
          <div
            className="methods--container col-sm-4 col-lg-3 d-flex flex-column align-items-start p-4"
            key={method.id}
          >
            <div className="d-flex align-items-center gap-5">
              <div className="methods--number text-center d-flex align-items-center justify-content-center">
                <span>{method.order}</span>
              </div>

              {Methodes.length - 1 !== index && (
                <div className="methods__line"></div>
              )}
            </div>
            <div className="methods--name p-2">{method.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Methodologies;
