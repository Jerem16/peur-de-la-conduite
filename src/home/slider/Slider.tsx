"use client";

import React, { useContext } from "react";
import SunBG from "./SunBG";
import SliderRoad from "./SliderRoad";
import SliderContent from "./SliderContent";
import { SliderContext } from "../../utils/context/slider/SliderContext";

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
            <SliderContent
                nextSlide={nextSlide}
                prevSlide={prevSlide}
                getClass={getClass}
            />
        </>
    );
};

export default Slider;
