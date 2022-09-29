import React from "react";
import { Link } from "react-router-dom";
import eventimg from "../assets/eventimage.png";
import clandericon from "../assets/calendar.svg";
import locationicon from "../assets/Fill.svg";
const ShowEvent = () => {
  return (
    <>
      <div className="show_event_main_container">
        <div className="show_event_main_wrapper">
          <div className="show_event_hero_img_wrapper">
            <img src={eventimg} alt="heroimg"></img>
          </div>
          <div className="event_host_main_wrapper">
            <h1 className="event_host_birthday_text">Birthday</h1>
            <p className="event_host_birthday_name_text">
              Hosted By{" "}
              <span className="event_host_birthday_name_bold_text">Usman</span>
            </p>
          </div>
          <div className="event_details_main_wrapper">
            <div className="event_details_icon_left_wrapper">
              <img src={clandericon}></img>
            </div>
            <div className="event_details_inner_right_wrapper">
              <span>18th August 6:00PM</span>
              <br></br>
              <span>to 19 August 1:00PM UTC +10</span>
            </div>
          </div>

          <div className="event_details_main_wrapper">
            <div className="event_details_icon_left_wrapper">
              <img src={locationicon}></img>
            </div>
            <div className="event_details_inner_right_wrapper">
              <span>Street name</span>
              <br></br>
              <span>Suburb, State, Postcode</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowEvent;
