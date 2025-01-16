"use client";
import React, { useContext } from "react";
import "./slider.scss";
import { sliderContent } from "../../assets/data/content/slider";
import Space from "../../utils/Space";
import Arrow from "../svg_Icon/Arrow";
import SliderNumber from "../svg_Icon/SliderNumber";
import { SliderContext } from "../../utils/context/SliderContext";

const Slider = () => {
    const sliderContext = useContext(SliderContext);

    if (!sliderContext) {
        throw new Error("Slider must be used within a SliderProvider");
    }

    const { currentSlide, nextSlide, prevSlide, getClass } = sliderContext;

    return (
        <div className="slider-bg">
            <div className="sld-bg">
                <div className="content-wrapper">
                    <div className="sld-sun"></div>
                </div>
            </div>
            <div className="sld-container">
                <img
                    className="sld-road"
                    src="/img/slider/slider-road.svg"
                    alt="Slider Road Background"
                    width="1635"
                    height="528"
                />

                <SliderNumber SlideClass={sliderContent[currentSlide].index} />
            </div>

            <div className="slider">
                <div className="content-wrapper">
                    {sliderContent.map((slide, index) => (
                        <div key={index} className={`slide ${getClass(index)}`}>
                            <div className="slider-content">
                                <div className="sld-card_title">
                                    <h2>
                                        {slide.h2}
                                        <Space />
                                        <span className="bold">
                                            {slide.h2bold}
                                        </span>
                                    </h2>
                                </div>
                                <div className="banner-description">
                                    <p>{slide.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Arrow
                className="slider-arrow left-arrow"
                ariaLabel="Aller à la diapositive précédente"
                onClick={prevSlide}
            />
            <Arrow
                className="slider-arrow right-arrow"
                ariaLabel="Aller à la diapositive suivante"
                onClick={nextSlide}
            />
        </div>
    );
};

export default Slider;
