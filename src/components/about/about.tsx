import React from "react";
import "./about.scss";
import Image from "next/image";

const About = () => {
    return (
        <div className="about content-wrapper">
            <div className="ab-img_info">
                <img
                    // className="ab-img_info"
                    src="/img/about/INFO.svg"
                    alt="Slider Road Background"
                    width="1635"
                    height="528"
                />
            </div>
            <div className="ab-card_bg"></div>
            <div className="segment">
                <div className="ab-card_header">
                    <h3>
                        Mounir <span>Bouakkaz</span>
                    </h3>

                    <Image
                        className="ab-img_head"
                        src="/img/about/avatar.webp"
                        alt="Slider Road Background"
                        width="225"
                        height="225"
                        loading="lazy"
                    />
                    <p>Enseignant de la conduite</p>
                </div>
                <div className="card_content">
                    <p>Bonjour, je m’appelle Mounir.</p>
                    <p>
                        Je suis enseignant de la conduite, spécialiste de la
                        peur de la conduite ( amaxophobie ).
                    </p>
                    <p>
                        “Je vous aide à surmonter vos craintes afin de retrouver
                        confiance et sérénité au volant.”
                    </p>
                    <p>
                        Mes compétences allient : expertise technique et
                        pédagogique, et soutien émotionnel.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
