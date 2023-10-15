import React, { useEffect, useRef } from "react";
import Header from "./Header";
import { Methodes } from "../assets/data/methodology";
import "../style/Methods.scss";

function Methodologies() {
  const MethodsContainer = useRef(null);
  const Lines = [];

function addDelay(steps) {
  steps.forEach((step, index) => {
    // You need to set the animationDelay property as a string with units (e.g., '1s' for 1 second)
    step.style.animationDelay = `${index * 0.5}s`; // Adjust the delay as needed
  });
}


  function AnimateMethods(animatedItem, addedClass){
      addDelay(animatedItem)
  // Check if the reference to MethodsContainer exists and if it has children
      if (MethodsContainer.current && animatedItem.length > 0) {
            const Observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(addedClass); // Add the addedClass class
              Observer.unobserve(entry.target);
            } else {
              entry.target.classList.remove(addedClass); // Remove the addedClass class when not intersecting
            }
          });
        }
    );

    animatedItem.forEach((step) => {
      Observer.observe(step);
    });
  }
}
  

  useEffect(()=>{
    if(MethodsContainer.current !== undefined ){
      const methods = Array.from(MethodsContainer.current.children)
      const LinesRef = Array.from(Lines)
      AnimateMethods(methods, "animate")
      AnimateMethods(LinesRef, "line__smooth")
    }
  },[MethodsContainer])

  return (
    <div className="p-5" id="Methodology" >
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

              {
                (Methodes.length - 1 !== index) && (
                <div ref={(ref) => (Lines[index] = ref)}className="methods__line"></div>
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
