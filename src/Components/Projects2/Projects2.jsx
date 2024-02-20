"use client";
import Image from "next/image";
import "./Projects2.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import { carousalData2 } from "./carousalData2";

const Projects2 = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [slidesToScroll, setSlidesToScroll] = useState(3);

  useEffect(() => {
    const updateSlidesToShow = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 1300) setSlidesToShow(4);
      else if (screenWidth >= 992) setSlidesToShow(3);
      else if (screenWidth >= 600) setSlidesToShow(2);
      else {
        setSlidesToShow(1);
        setSlidesToScroll(1);
      }
    };
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);

    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    arrows: false,
    customPaging: (i) => (
      <div
        style={{
          width: "8px",
          height: "8px",
          background: "white",
          borderRadius: "50%",
        }}
      ></div>
    ),
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
  };

  return (
    <>
      <div className="emptyDiv">
        <div className="walletContainer">
          <div className="wallet">
            <div className="walletImg">
              <img src="/assets/walletD.svg"></img>
            </div>
            <div className="walletContent">
              <h1>Bit Wallet</h1>
              <p className="walletSubT">Your Secure Digital Wallet</p>
              <p className="walletPara">
                Your go-to non-custodial digital wallet that ensures the safety of
                your digital assets, offering a seamless and user-friendly
                experience.
              </p>
              <button className="launchButton">
                <span>Launch Dapp</span>{" "}
                <Image
                  src={"/assets/launch.svg"}
                  width={40}
                  height={40}
                  alt="launch"
                />
              </button>
            </div>
          </div>
        </div>


      <div className="bhoomiSection">
        <div className="bhoomi">
          <h1>BitBhoomi</h1>
          <div className="bhoomiSubT">
            <p>Where Technology Meets Sustainability</p>
          </div>
          <p>
            A revolutionary platform that harnesses the power of blockchain to
            bring unprecedented transparency to tree plantation activities.
          </p>
          <button className="launchButton">
            <span>Launch Dapp</span>{" "}
            <Image
              src={"/assets/launch.svg"}
              width={40}
              height={40}
              alt="launch"
              />
          </button>
        </div>

        <div className="carousalSection">
          <Slider {...settings} className="slider">
            {carousalData2.map((data, index) => (
              <div key={index} className="carousal">
                <div className="box">
                  <Image
                    src={`${data.img}`}
                    className="boxImg"
                    width={50}
                    height={50}
                    alt="boximg"
                    />
                  <h2>{data.title}</h2>
                  <p>{data.desc}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
            </div>

      <div className="dppContainer">
        <div className="DPP">
          <div className="DPPImg">
            <img src="/assets/DppD.svg"></img>
          </div>
          <div className="DPPContent">
            <h1>BITDPP</h1>
            <p className="DPPSubT">The New-Age Digital Product Passport</p>
            <p className="DPPPara">
              A visionary concept that aims to revolutionize the perspective
              towards daily-use products by placing a spotlight on sustainability
              and the intricate journey they undertake from their source to the
              consumer's hands.
            </p>
            <button className="launchButton">
              <span>Launch Dapp</span>{" "}
              <Image
                src={"/assets/launch.svg"}
                width={40}
                height={40}
                alt="launch"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects2;
