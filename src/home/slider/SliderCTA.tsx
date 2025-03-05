import React from "react";
import ButtonLink from "../../components/button/ButtonLink";
import { menuItems } from "../../assets/data/menuItems";
import { sliderInfo } from "../../assets/data/content/info";

const SliderCTA = () => {
    return (
        <div className="sld-CTA flx-c">
            <div>
                <p className="p1">{sliderInfo[1].info}</p>
                <p className="p2">{sliderInfo[2].info}</p>
            </div>
            {menuItems.reservation?.[0] && (
                <ButtonLink href={menuItems.reservation[0].path}>
                    {sliderInfo[3].info}
                </ButtonLink>
            )}
        </div>
    );
};

export default SliderCTA;
