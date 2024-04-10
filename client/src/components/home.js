import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Newsletter from "./includes/newsletter";

const Home = () => {
  return (
    <>
      <Carousel>
      <Carousel.Item style={{height:'500px'}}>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/random/?beach"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Hola! Visitor</h3>
          <p>Get latest News | View Post</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:'500px'}}>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/random/?nature"
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3>Hola! Visitor</h3>
          <p>Get latest News | View Post</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:'500px'}}>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/random/?hills"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>Hola! Visitor</h3>
          <p>Get latest News | View Post</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      <Newsletter/>
    </>
  );
};

export default Home;
