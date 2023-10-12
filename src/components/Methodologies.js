import React, { useEffect, useRef } from "react";
import Header from "./Header";
import { Methodes } from "../assets/data/methodology";
import "../style/Methods.scss";

function Methodologies() {
  const MethodsContainer = useRef(null);

function addDelay(steps) {
  steps.forEach((step, index) => {
    // You need to set the animationDelay property as a string with units (e.g., '1s' for 1 second)
    step.style.animationDelay = `${index * 0.5}s`; // Adjust the delay as needed
  });
}


  function AnimateMethods(){
      const Containers = Array.from(MethodsContainer.current.children);
      addDelay(Containers)
  // Check if the reference to MethodsContainer exists and if it has children
      if (MethodsContainer.current && Containers.length > 0) {
            const Observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate"); // Add the "animate" class
            } else {
              entry.target.classList.remove("animate"); // Remove the "animate" class when not intersecting
            }
          });
        }
    );

    Containers.forEach((step) => {
      Observer.observe(step);
    });
  }
}
  

  useEffect(()=>{
    if(MethodsContainer.current !== undefined ){
      AnimateMethods()
    }
  },[MethodsContainer])

  return (
    <div className="p-5">
      <Header title="My Methodologies" />
      <div ref={MethodsContainer} className="methods row justify-content-center gap-5">
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
