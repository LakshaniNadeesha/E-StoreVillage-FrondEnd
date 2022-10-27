import React, { useEffect, useState } from "react";
import ProudctCard from "../../../components/ProductCard/ProductCard";
import "./eventpage.css";
import Giveaways from "./Giveaways/Giveaways";
import TopEvents from "./TopEvents/TopEvents";
import { RiArrowDropDownLine } from "react-icons/ri";
import axios from 'axios';

const EventPage = () => {
  const [Event, setEvent] = useState([])
  useEffect(() => {

    axios.get("http://localhost:3030/v1/event", {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    })
      .then((res) => {
        setEvent(res.data.data)
      }).catch((err) => {
        console.log(err);
      });

  }, [])
  return (
    <div className="event-main-container">

      {Event.map((item, index) => (
        <TopEvents key={index} item={item}/>
      ))}

    </div>
  );
};

export default EventPage;
