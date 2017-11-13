import React, { Component } from "react";
import logo from "./logo.svg";
import Navg from "./components/Nav";
import Content from "./components/Content";
import ImgCarousel from "./components/ImgCarousel";
import Intro from "./components/Intro";
import Media from "./components/Media";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <img src={logo} alt="logo" />
        <Intro />
        <Navg />
        <div className="container">
          <div className=" row entry">
            <ImgCarousel />
            <Content />
          </div>
          <hr />
          <Media />
          <hr />
          <div className="row entry">
            <Content />
            <ImgCarousel />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
