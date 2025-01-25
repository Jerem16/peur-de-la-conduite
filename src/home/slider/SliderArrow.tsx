import React from "react";
import Arrow from "../../components/svg_Icon/utils/Arrow";

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
            className="banner-arrow flx-c"
            tabIndex={0} // Rendre focusable
            onKeyDown={handleKeyDown}
            role="region"
            aria-label="Controlle des fleches navigation slider"
        >
            <Arrow
                className="slider-arrow left-arrow flx-c"
                ariaLabel="Aller à la diapositive précédente"
                onClick={prevSlide}
            />
            <Arrow
                className="slider-arrow right-arrow flx-c"
                ariaLabel="Aller à la diapositive suivante"
                onClick={nextSlide}
            />
        </span>
    );
};

export default SliderArrow;
