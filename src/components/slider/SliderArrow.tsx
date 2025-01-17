import React from "react";
import "./sliderArrow.scss";
import Arrow from "../svg_Icon/Arrow";

interface SliderArrowProps {
    nextSlide: (event?: React.MouseEvent | React.KeyboardEvent) => void;
    prevSlide: () => void;
}

const SliderArrow: React.FC<SliderArrowProps> = ({ nextSlide, prevSlide }) => {
    return (
        <span className="banner-arrow">
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
        </span>
    );
};

export default SliderArrow;
