import React from "react";

const SliderRoad = () => {
    return (
        <div className="slider-road">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1634.9"
                height="528.6"
                fill="none"
                viewBox="0 0 1634.9 528.6"
            >
                <g strokeMiterlimit="10">
                    <use href="#B" stroke="#fff" strokeWidth="41" />
                    <use href="#B" stroke="#2c2b30" strokeWidth="37" />
                    <use
                        href="#B"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeDasharray="6.9889,7.9873"
                    />
                </g>
                <defs>
                    <path
                        id="B"
                        d="M20.5 0v317c0 73.1 59.3 132.3 132.3 132.3h398.4c204.5 0 199.9 51.3 280.1 58.5 53.3 4.8 73.6-56.3 32.1-90.4-3.1-2.6-14.7-10.7-27.7-18.5-36.2-22-87.5-57.6-63.3-116 1.1-2.5 2.9-6.1 5.3-10.2 24.3-41.4 81.5-48.1 114.9-13.6 29.1 30.1 46.7 78.8 69.9 107.2 27.8 34.7 82.4 34.6 108.7-.3 4.1-5.4 14.1-17.1 18-22.1 27.6-36.5 60.2-41.4 90.3-22.9 41.5 25.6 44.2 70.9 61.9 110.3 12.9 28.5 33.5 37.3 56.1 37.1 29-.2 49.2-21.8 71.6-44.3 25.4-25.4 47-32.1 71.3-32.8l118.7-.2c30.4 0 55.1-24.5 55.2-54.9L1614.2 0"
                    />
                </defs>
            </svg>
        </div>
    );
};

export default React.memo(SliderRoad);
