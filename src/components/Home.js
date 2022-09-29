import React from "react";
import { Link } from "react-router-dom";
import heroimg from "../assets/heroimg.png";
const Home = () => {
  return (
    <>
      <div className="home_main_container">
        <div className="home_main_wrapper">
          <div className="home_title_wrapper">
            <h1 className="home_title_text">
              Imagine if <span className="home_snapchat_text">Snapchat</span>{" "}
              had events.
            </h1>
          </div>
          <div className="home_paragraph_wrapper">
            <p className="home_paragraph_text">
              Easily host and share events with your friends across any social
              media.
            </p>
          </div>
          <div className="home_hero_img_wrapper">
            <img src={heroimg} alt="heroimg"></img>
          </div>
          <div className="home_create_button">
            <Link className="home_text_link" to="/create">
              🎉 Create my event
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
