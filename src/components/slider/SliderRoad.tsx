import React from "react";
import "./sliderRoad.scss";
import { sliderContent } from "../../assets/data/content/slider";
import SliderNumber from "./svg/SliderNumber";

interface SliderRoadProps {
    currentSlide: number;
}

const SliderRoad: React.FC<SliderRoadProps> = ({ currentSlide }) => {
    return (
        <div className="sld-container">
            <img
                className="sld-road"
                src="/img/slider/slider-road.svg"
                alt="Slider Road Background"
                width="1635"
                height="528"
            />
            <img
                className="sld-fl_end"
                src="/img/slider/endFlag.svg"
                alt="Slider Flag End"
                width="63"
                height="528"
            />
            <img
                className="sld-fl_start"
                src="/img/slider/startFlag.svg"
                alt="Slider Flag Start"
                width="87"
                height="117"
            />
            <SliderNumber SlideClass={sliderContent[currentSlide].ref} />
        </div>
    );
};

export default SliderRoad;
