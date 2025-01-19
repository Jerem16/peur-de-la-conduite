import React from "react";
import "./sliderCTA.scss";
import ButtonLink from "../button/ButtonLink";

const SliderCTA = () => {
    return (
        <div className="sld-CTA">
            <p className="p1">Diagnostic</p>
            <p className="p2">Gratuit !</p>
            <ButtonLink href={"/page-reservation"}>Je fonce !</ButtonLink>
        </div>
    );
};

export default SliderCTA;
