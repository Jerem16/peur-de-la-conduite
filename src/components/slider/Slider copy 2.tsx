"use client";
import React, { useState, useEffect } from "react";
import "./slider.scss";
import { sliderContent } from "../../assets/data/content/slider";
import Space from "../../utils/Space";
import Arrow from "../svg_Icon/Arrow";
import SliderNumber from "../svg_Icon/SliderNumber";

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [stopTimerButton, setStopTimerButton] = useState(false);

    const nextSlide = () => {
        setStopTimerButton(true); // Arrête le défilement automatique
        setCurrentSlide((prev) => {
            if (prev < sliderContent.length - 1) {
                return prev + 1;
            }
            return 0; // Retour à la première slide
        });
    };

    // Fonction pour aller à la slide précédente (avec boucle)
    const prevSlide = () => {
        setStopTimerButton(true); // Arrête le défilement automatique
        setCurrentSlide((prev) => {
            if (prev > 0) {
                return prev - 1;
            }
            return sliderContent.length - 1; // Retour à la dernière slide
        });
    };

    useEffect(() => {
        if (stopTimerButton) return; // Arrêter tout si le bouton stop est activé

        const count = 2000; // Intervalle entre les slides
        const startTimerAutomation = setInterval(() => {
            setCurrentSlide((prev) => {
                if (prev < sliderContent.length - 1) {
                    return prev + 1;
                }
                clearInterval(startTimerAutomation); // Arrêter après la dernière slide
                return prev; // Rester sur la dernière slide
            });
        }, count);

        const stopTimer = setTimeout(() => {
            clearInterval(startTimerAutomation); // Arrêter l'intervalle après un tour complet
        }, count * sliderContent.length);

        return () => {
            clearInterval(startTimerAutomation);
            clearTimeout(stopTimer);
        }; // Nettoyage des temporisateurs à chaque changement
    }, [stopTimerButton]);

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

    return (
        <div className="slider-bg">
            <div className="sld-bg">
                <div className="content-wrapper">
                    <div className="sld-sun"></div>
                </div>
            </div>
            <div className="sld-container">
                <img
                    className="sld-road"
                    src="/img/slider/slider-road.svg"
                    alt="Slider Road Background"
                    width="1635"
                    height="528"
                />

                <SliderNumber
                    SlideClass={sliderContent[currentSlide].index}
                    // SliderStyle={sliderContent[currentSlide].style}
                />
            </div>

            <div className="slider ">
                <div className="content-wrapper">
                    {sliderContent.map((slide, index) => (
                        <div key={index} className={`slide ${getClass(index)}`}>
                            <div className="slider-content">
                                <div className="sld-card_title">
                                    <h2>
                                        {slide.h2}
                                        <Space />
                                        <span className="bold">
                                            {slide.h2bold}
                                        </span>
                                    </h2>
                                </div>
                                <div className="banner-description">
                                    <p>{slide.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
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
