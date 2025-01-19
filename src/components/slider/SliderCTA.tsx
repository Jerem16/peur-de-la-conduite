import React from "react";
import "./sliderCTA.scss";
import ButtonLink from "../button/ButtonLink";
import { menuItems } from "../../assets/data/menuItems";

const SliderCTA = () => {
    return (
        <div className="sld-CTA">
            <p className="p1">Diagnostic</p>
            <p className="p2">Gratuit !</p>
            <ButtonLink href={menuItems.reservation[0].path}>
                Je fonce !
            </ButtonLink>
        </div>
    );
};

export default SliderCTA;
