import React from "react";
import "./sliderArrow.scss";
import Arrow from "../svg_Icon/Arrow";

interface SliderArrowProps {
    nextSlide: (event?: React.MouseEvent | React.KeyboardEvent) => void;
    prevSlide: (event?: React.MouseEvent | React.KeyboardEvent) => void;
}

const SliderArrow: React.FC<SliderArrowProps> = ({ nextSlide, prevSlide }) => {
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowLeft") {
            prevSlide(e);
        } else if (e.key === "ArrowRight") {
            nextSlide(e);
        }
    };

    return (
        <span
            className="banner-arrow"
            tabIndex={0} // Rendre focusable
            onKeyDown={handleKeyDown}
            role="region"
            aria-label="Controlle des fleches navigation slider"
        >
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
