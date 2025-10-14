import React from "react";

const card = (props) => {
  return (
    <div className="card">
      <div className="top">
        <img
          src="https://st3.depositphotos.com/1001860/16375/i/450/depositphotos_163757632-stock-photo-amazon-logo-on-a-white.jpg"
          alt=""
        />

        <button>
          <h4>Save</h4> <i class="ri-bookmark-line"></i>
        </button>
      </div>
      <div className="center">
        <h3>
          {props.company} <span>5 days ago</span>
        </h3>
        <h4>Senior UI/UX Designer</h4>
        <div className="centerbtn">
          <h6>Part-Time</h6>
          <h6>Senior level</h6>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3>$121/hr</h3>
          <p>Mumbai,India</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default card;
