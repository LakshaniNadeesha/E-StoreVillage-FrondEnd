import React from "react";
import "./topevents.css";
import Banner from "../../../../assests/images/top-events.png";
const TopEvents = (item) => {

  return (
    <div className="top-event-row-container">
      <img src={Banner} className="top-event-img-container" />
      <div>
        <h3>{item.item.name}</h3>
        <p className="top-event-para">
          {item.item.discription}
        </p>
      </div>
    </div>
  );
};

export default TopEvents;
