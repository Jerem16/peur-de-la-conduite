import React from "react";
import { sliderInfo } from "../../assets/data/content/info";

const SliderInfo = () => {
    return (
        <div className="sld-info_ctn">
            <p>{sliderInfo[0].info}</p>
            <div className="icon-position">
                <img
                    className="sld-road"
                    src="/img/slider/location-p2.svg"
                    alt="Icon Map"
                    width="260"
                    height="260"
                />
                <img
                    className="sld-road"
                    src="/img/slider/location-p1.svg"
                    alt="Icon Location"
                    width="260"
                    height="260"
                />
            </div>
        </div>
    );
};

export default SliderInfo;
