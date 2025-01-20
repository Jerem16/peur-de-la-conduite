"use client";

import React, { useContext, useEffect } from "react";
import "./slider.scss";
import SunBG from "./SunBG";
import SliderRoad from "./SliderRoad";
import SliderContent from "./SliderContent";
import { SliderContext } from "../../utils/context/SliderContext";
// import { useURLParams } from "../../utils/useURLParams";
// import { sliderContent } from "../../assets/data/content/slider";

const Slider = () => {
    const sliderContext = useContext(SliderContext);
    // const { setParam, getParam } = useURLParams(); // Récupération de getParam pour vérifier l'état actuel de l'URL

    if (!sliderContext) {
        throw new Error("Slider must be used within a SliderProvider");
    }

    const { currentSlide, nextSlide, prevSlide, getClass } = sliderContext;

    // useEffect(() => {
    //     const currentParam = getParam("slideRef");

    //     if (currentParam !== sliderContent[currentSlide].ref) {
    //         setParam("slideRef", sliderContent[currentSlide].ref);
    //     }
    // }, [currentSlide, sliderContent, getParam, setParam]);

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
