'use client'
import './Partners.css'
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import { partnersData } from "./partnersData";
import { Element } from 'react-scroll';
const Partners = () => {

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
        dots: false,
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
        <Element name='partners'>
            <div className='partnerSection'>
                <h1 className='partnerTitle'>Our Partners</h1>
                <div className="PcarousalSection">
                    <Slider {...settings} className="Pslider">
                        {partnersData.map((data, index) => (
                            <div key={index} className="Pcarousal">
                                <div className="Pbox">
                                    <Image
                                        src={`${data.img}`}
                                        className="boxImg"
                                        width={150}
                                        height={100}
                                        alt="boximg"
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </Element>
    )
}
export default Partners