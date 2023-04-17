import React from "react";
import "./Steps.scss";

const Steps = ({ currentStep, stepsList = [] }) => {
  return (
    <div className="steps-container">
      <ul className="steps">
        {stepsList.map((step, index) => (
          <li
            key={index}
            className={`${currentStep > index && "steps__active"}`}
            style={{
              width: `${100 / stepsList.length}%`,
            }}
          >
            {step}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Steps;
