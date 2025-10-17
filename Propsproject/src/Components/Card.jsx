import React from "react";

const card = (props) => {
  return (
    <div className="card">
      <div className="top">
        <img src={props.brandLogo} alt="" />

        <button>
          <h4>Save</h4> <i class="ri-bookmark-line"></i>
        </button>
      </div>
      <div className="center">
        <h3>
          {props.company} <span>{props.date}</span>
        </h3>
        <h4>{props.post}</h4>
        <div className="centerbtn">
          <h6>{props.tag1}</h6>
          <h6>{props.tag2}</h6>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3>{props.pay}</h3>
          <p>{props.location}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default card;
