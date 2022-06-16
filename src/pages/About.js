import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/profile_pic.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Efaz Ahmed</div>
            <div className="brief_description">
              Hello! My name is Efaz Ahmed and I am a rising junior at Baruch College, NYC. My major is Data Analytics
              and my minor is Computer Science. I love to create Web Applications and software that involves Data Science.
            </div>
          </div>
        </div>
      </div>
    )
  }
}
