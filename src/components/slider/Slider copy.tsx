"use client";
import React, { useState, useEffect } from "react";
import "./slider.scss";
import { sliderContent } from "../../assets/data/content/slider";
import Space from "../../utils/Space";
import Arrow from "../svg_Icon/Arrow";
import SliderNumber from "../svg_Icon/SliderNumber";
import SliderArrow from "./SliderArrow";
const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Fonction pour aller à la slide suivante (avec boucle)
    const nextSlide = () => {
        setCurrentSlide((prev) => {
            // Si on est à la dernière slide, on revient à la première
            if (prev < sliderContent.length - 1) {
                return prev + 1;
            }
            // Retour à la première slide
            return 0;
        });
    };

    const timerSlide = () => {
        setCurrentSlide((prev) => {
            if (prev < sliderContent.length - 1) {
                return prev + 1;
            }
            return prev; // Ne dépasse pas la dernière slide
        });
    };

    // Fonction pour aller à la slide précédente (avec boucle)
    const prevSlide = () => {
        setCurrentSlide((prev) => {
            // Si on est à la première slide, on va à la dernière
            if (prev > 0) {
                return prev - 1;
            }
            // Retour à la dernière slide
            return sliderContent.length - 1;
        });
    };

    useEffect(() => {
        const startTimer = setTimeout(() => {
            const count = 4000; // Intervalle de 3 secondes pour chaque slide
            const timer = setInterval(() => {
                timerSlide();
            }, count); // 3 secondes entre chaque slide

            // Arrêter après 3 secondes * nombre de slides (pour qu'il s'arrête après la dernière)
            const stopTimer = setTimeout(() => {
                clearInterval(timer);
            }, count * sliderContent.length); // Temps total du défilement automatique

            return () => {
                clearInterval(timer);
                clearTimeout(stopTimer);
            };
        }, 1500); // Délai initial de 2 secondes avant de commencer le défilement

        return () => {
            clearTimeout(startTimer); // Annuler le timer de début si le composant est démonté
        };
    }, []);

    return (
        <div className="slider-bg">
            {/* Image de fond statique */}
            <img
                className="slider-road"
                src="/img/slider/slider-road.svg"
                alt="Slider Road Background"
                width="1635"
                height="528"
            />
            <SliderNumber SlideClass={sliderContent[currentSlide].index} />
            <div className="sld-bg">
                <div className="sld-sun"></div>
            </div>
            <div className="slide-nav slider">
                <div className="slide slider-content">
                    <div className="sld-card_title">
                        <h2>
                            {sliderContent[currentSlide].h2}
                            <Space />
                            <span className="bold">
                                {sliderContent[currentSlide].h2bold}
                            </span>
                        </h2>
                    </div>
                    <div className="banner-description">
                        <p>{sliderContent[currentSlide].description}</p>
                    </div>
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
            {/* </span> */}
        </div>
    );
};

export default Slider;
