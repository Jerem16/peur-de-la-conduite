import React from "react";
import "./sliderCTA.scss";
import ButtonLink from "../../button/ButtonLink";
import { menuItems } from "../../../assets/data/menuItems";
import { sliderInfo } from "../../../assets/data/content/info";

const SliderCTA = () => {
    return (
        <div className="sld-CTA flx-c">
            <p className="p1">{sliderInfo[1].info}</p>
            <p className="p2">{sliderInfo[2].info}</p>
            <ButtonLink href={menuItems.reservation[0].path}>
                {sliderInfo[3].info}
            </ButtonLink>
        </div>
    );
};

export default SliderCTA;
