import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../accounts/account.css";
import CarouselImg from "./Images/Mohsen Fatemian on Behance.png";
import CarouselImg2 from "./Images/Prefeitura de Criciúma - REFIS 2014.png";
import CarouselImg3 from "./Images/13288.jpg";
import CarouselImg5 from "./Images/1916.jpg";
import CarouselImg6 from "./Images/2655633.jpg";
import CarouselImg7 from "./Images/3331683.jpg";

export default class SimpleSlider extends Component {
  render() {
    return (
      <div className="slider">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={CarouselImg} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={CarouselImg2} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={CarouselImg3} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={CarouselImg5} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={CarouselImg6} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={CarouselImg7} />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
