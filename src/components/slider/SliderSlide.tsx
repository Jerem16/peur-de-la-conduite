import React from "react";
import "./sliderSlide.scss";
import { sliderContent } from "../../assets/data/content/slider";
import Space from "../../utils/Space";
import SliderArrow from "./SliderArrow";

interface SliderSlideProps {
    getClass: (index: number) => string;
    nextSlide: (event?: React.MouseEvent | React.KeyboardEvent) => void;
    prevSlide: () => void;
}
const SliderSlide: React.FC<SliderSlideProps> = ({
    nextSlide,
    prevSlide,
    getClass,
}) => {
    return (
        <div className="slider">
            <div className="content-wrapper">
                {sliderContent.map((slide, index) => (
                    <div
                        key={index + "C"}
                        className={`slide ${getClass(index)}`}
                    >
                        <div className="slider-content">
                            <div className="sld-card_title">
                                <h2>
                                    {slide.h2}
                                    <Space />
                                    <span className="bold">{slide.h2bold}</span>
                                </h2>
                            </div>
                            <div className="banner-description">
                                <p>{slide.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
                <SliderArrow prevSlide={prevSlide} nextSlide={nextSlide} />
            </div>
        </div>
    );
};

export default SliderSlide;
