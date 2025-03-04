import React from "react";
import styled from "styled-components";
import WordAnimation from "../components/homeanimate";
import ImageScroll from "../components/imagescroll";
import { NavLink } from "react-router-dom";

const words = ["Think", "Tinker", "Transform"];
const interval = 200; // Delay between each letter
const typingDelay = 2000; // Delay before erasing starts
const erasingDelay = 100; // Delay between each erased letter

const Home = () => {
  return (
    <Homestyled>
      <div className="ellipse1" />
      <div className="ellipse2"></div>
      {/* <div className="circle1" /> */}
      <div className="circle2" />
      <div className="circle3" />
      {/* <div className="circle4" /> */}
      {/* <div className="circle5" /> */}
      <div className="container">
        <div className="row">
          <div className="col-xl" id="left">
            <div className="hero-heading">Tinkerers’ Laboratory</div>
            <div className="hero-tag">IIT Hyderabad</div>
            <div className="hero-bottom">
              <WordAnimation
                words={words}
                interval={interval}
                typingDelay={typingDelay}
                erasingDelay={erasingDelay}
              />
            </div>
            <button className="reachus">
              <NavLink to="/contacts">Reach Us</NavLink>
            </button>
          </div>
          <div className="col-xl" id="right">
            <div className="section-hero-image">
              <picture>
                <img className="pic1" src="./images/Home.svg" alt="image" />
              </picture>
            </div>
          </div>
        </div>
        <div className="row" id="aims">
          <div className="col-lg-12">
            <div className="ouraim">Our Aim</div>
            <div className="seperator"></div>
            <div className="desp1">
              Here, at Tinkerers' Lab, our aim is to provide you a working space
              with vast ranges of tools in order to bring out the inner tinkerer
              in you
            </div>
          </div>
        </div>
        <div className="row" id="aims2">
          <div className="col-lg-4 col-md-6">
            <div className="cont">
              <div className="box">
                <img src="./images/aim1.svg" alt="Aim1" />
              </div>
              <div className="content">
                <div className="heading">Availability</div>
                <div className="line"></div>
                <div className="desp2">
                  We know that the best ideas don't always come to us during
                  work hours. Tinkerers' Lab is open 24/7, giving you the
                  liberty to build and innovate whenever.
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="cont">
              <div className="box">
                <img src="./images/aim2.svg" alt="Aim1" />
              </div>
              <div className="content">
                <div className="heading">Resources</div>
                <div className="line"></div>
                <div className="desp2">
                  We have a wide range of resources ,from the commonplace
                  Raspberry Pis and Arduinos to CNCs and 3D Printers.
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="cont">
              <div className="box">
                <img src="./images/aim3.svg" alt="Aim1" />
              </div>
              <div className="content">
                <div className="heading">TL Talks</div>
                <div className="line"></div>
                <div className="desp2">
                  TL will host talks and sessions with innovators and
                  entrepreneurs to boost the interest in new fields and push
                  boundaries.
                </div>
              </div>
            </div>
            <div className="hand">
              <img src="./images/hand.svg" alt="hand" />
            </div>
          </div>
        </div>
      </div>
      <ImageScroll />
    </Homestyled>
  );
};

export default Home;

const Homestyled = styled.section`
  .col-lg-4,
  .col-md-6 {
    padding-top: 20px;
  }
  .cont {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .hand {
    position: absolute;
    z-index: 3;
    right: 5vw;
    margin-bottom: 5vw;
  }
  .separator {
    border: 3px solid rgba(0, 0, 0, 0.1);
  }
  .desp2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: center;

    color: #001824;
    padding: 0rem 15vw;
    margin-bottom: 15vh;
  }
  #aims2,
  #aims {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 5vw;
    padding-right: 5vw;
    position: relative;
  }
  .line {
    margin: 2.5rem 5rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  .heading {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    text-align: center;

    color: #6c10c6;
    padding-top: 4rem;
  }
  .content {
    background: #ffffff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 39px;
    margin-top: -3.5rem;
    z-index: 1;
    height: 38rem;
  }
  .box {
    background: #eddaff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 95px;
    height: 95px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    z-index: 2;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .desp1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: center;

    color: #001824;
    margin: 3rem;
    margin-top: 20px;
  }
  .ouraim {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    text-align: center;

    color: #000000;
    padding-top: 7vh;
  }
  .reachus {
    width: 220px;
    height: 10vh;
    a {
      color: #fff;
    }

    background: #6c10c6;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 46px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;

    align-items: center;
    text-align: center;

    color: #ffffff;
  }
  .ellipse2 {
    position: absolute;
    width: 33vw;
    height: 35vw;
    left: 0;
    top: -18vw;

    background: radial-gradient(
        40.83% 40.83% at 50% 50%,
        rgba(0, 224, 255, 0.5) 0%,
        rgba(51, 182, 255, 0) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  }

  .circle1 {
    position: absolute;
    background-color: #6c10c6;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    left: 8rem;
    top: 12rem;
  }

  .ellipse1 {
    position: absolute;
    width: 40vw;
    height: 45vw;
    left: -18vw;
    top: -19vw;

    background: radial-gradient(
        40.83% 40.83% at 50% 50%,
        rgba(108, 16, 198, 0.5) 0%,
        rgba(186, 104, 200, 0) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  }
  .circle2 {
    position: absolute;
    background-color: #6c10c6;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 8rem;
    top: 60rem;
  }
  .col-xl-6 {
    text-align: center;
  }
  .col-xl {
    text-align: center;
  }

  .circle3 {
    position: absolute;
    background-color: #6c10c6;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: 12rem;
    top: 68rem;
  }
  .pic1 {
    animation: rotation1 8s infinite linear;
  }

  @keyframes rotation1 {
    0%,
    100% {
      transform: rotate(-15deg);
    }
    10%,
    90% {
      transform: rotate(-10deg);
    }
    40%,
    60% {
      transform: rotate(10deg);
    }
    50% {
      transform: rotate(15deg);
    }
  }

  .circle4 {
    position: absolute;
    background-color: #6c10c6;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 74rem;
    top: 20rem;
  }

  .circle5 {
    position: absolute;
    background-color: #6c10c6;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: 78rem;
    top: 28rem;
  }
  .hero-heading {
    margin-top: 8rem;
    margin-bottom: 3rem;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 80px;
    line-height: 85px;
  }

  .hero-tag {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
  }

  .hero-bottom {
    padding: 50px;
    height: 150px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    padding-bottom: 2rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
    /* height: 624px; */
  }

  picture {
    text-align: center;
  }
  @media (min-width: 768px) {
    .desp2 {
      padding: 0rem 5vw;
    }
  }
  @media (max-width: 1200px) {
    .reachus {
      font-weight: 700;
      font-size: 24px;
      width: 75vw;
    }
    #right {
      display: none;
    }
    body {
      min-width: fit-content;
    }
    .desp2 {
      padding: 0rem 5vw;
    }
    .container {
      justify-content: center;
      width: 100vw;
    }
    .pic1 {
      display: none;
    }

    .hero-heading {
      text-align: center;
      font-weight: 700;
      font-size: 50px;
    }

    .hero-tag {
      text-align: center;
      font-weight: 500;
      font-size: 30px;
    }

    .hero-bottom {
      text-align: center;
    }
    .circle1 {
      display: none;
    }

    .circle2 {
      display: none;
    }

    .circle3 {
      display: none;
    }

    .circle4 {
      display: none;
    }

    .circle5 {
      display: none;
    }
  }
`;
