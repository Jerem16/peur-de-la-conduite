"use client";

import React, { useContext } from "react";
import "./slider.scss";
import SunBG from "./SunBG";
import SliderRoad from "./SliderRoad";
import SliderSlide from "./SliderSlide";
import { SliderContext } from "../../utils/context/SliderContext";

const Slider = () => {
    const sliderContext = useContext(SliderContext);

    if (!sliderContext) {
        throw new Error("Slider must be used within a SliderProvider");
    }

    const { currentSlide, nextSlide, prevSlide, getClass } = sliderContext;

    return (
        <>
            <SunBG />
            <SliderRoad currentSlide={currentSlide} />
            <SliderSlide
                nextSlide={nextSlide}
                prevSlide={prevSlide}
                getClass={getClass}
            />
        </>
    );
};

export default Slider;
