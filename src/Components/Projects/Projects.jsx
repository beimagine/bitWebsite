"use client";
import "./Projects.css";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import { carousalData } from "./carousalData";
const Projects = () => {
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
        autoplaySpeed: 6000,
        pauseOnHover: true,
    };

    return (
        <>
            <h1 className="PTitle">
                <span className="PWord">Our Projects</span>
            </h1>
            <div className="memoir">
                <h1>Bitmemoir</h1>
                <div className="memoirSubT">
                    <ul>
                        <li>Issue</li>
                        <li>Retrive</li>
                        <li>Store</li>
                        <li>Verify</li>
                    </ul>
                </div>
                <p>
                    Bringing a paradigm shift in the traditional approach to document
                    management and sharing, this NFT utility platform, leverages
                    blockchain technology to create a decentralized way to secure digital
                    records and create a tamper-proof infrastructure.
                </p>
                <button className="launchButton">
                    <span>Launch Dapp</span>{" "}
                    <Image src={"/assets/launch.svg"} width={40} height={40} alt="launch" />
                </button>
            </div>

            <div className="carousalSection">
                <Slider {...settings} className="slider">
                    {carousalData.map((data, index) => (
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
        </>
    );
};
export default Projects;
