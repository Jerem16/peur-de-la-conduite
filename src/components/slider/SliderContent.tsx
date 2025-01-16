"use client";
import React, { useState, useEffect } from "react";
import { sliderContent } from "../../assets/data/content/slider";

const SliderContent = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const timerSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % sliderContent.length);
    };

    const getClass = (index: number) => {
        if (index === currentSlide) {
            return "active";
        } else if (
            index ===
            (currentSlide - 1 + sliderContent.length) % sliderContent.length
        ) {
            return "prev";
        } else if (index === (currentSlide + 1) % sliderContent.length) {
            return "next";
        } else {
            return "";
        }
    };

    useEffect(() => {
        const timer = setInterval(timerSlide, 4000);
        return () => clearInterval(timer);
    }, [currentSlide]);

    return (
        <div className="slider slide-nav">
            {sliderContent.map((slide, index) => (
                <div
                    key={index}
                    className={`slide slider-content ${getClass(index)}`}
                >
                    <div className="sld-card_title">
                        <h2>
                            {slide.h2}{" "}
                            <span className="bold">{slide.h2bold}</span>
                        </h2>
                    </div>
                    <div className="banner-description">
                        <p>{slide.description}</p>
                    </div>
                </div>
            ))}
            <div className="slider-controls">
                <button
                    onClick={() =>
                        setCurrentSlide(
                            (prev) =>
                                (prev - 1 + sliderContent.length) %
                                sliderContent.length
                        )
                    }
                >
                    Previous
                </button>
                <button
                    onClick={() =>
                        setCurrentSlide(
                            (prev) => (prev + 1) % sliderContent.length
                        )
                    }
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default SliderContent;
