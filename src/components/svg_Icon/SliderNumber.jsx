import React from "react";

const SliderNumber = ({ SlideClass }) => {
    return (
        <div className={`slider-number ${SlideClass}`}>
            <style>{`
                .P { fill: #F1F1F0; }
                .Q { opacity: 0.25; }
                .R { opacity: 0.54; }
                .S { fill: #FDF8FB; }
                .T { font-family: 'Roboto Flex', sans-serif; }
                .U { font-size: 24px; }
            `}</style>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1656 528.6"
                width="1656"
                height="528.6"
            >
                <linearGradient
                    id="F"
                    gradientUnits="userSpaceOnUse"
                    x1="69.473"
                    y1="302.745"
                    x2="69.473"
                    y2="248.745"
                >
                    <stop offset="0" stopColor="#1d1e1c" />
                    <stop offset="1" stopColor="#f1f1f0" />
                </linearGradient>

                <g className="sld-numb1">
                    <use href="#H" y="105" className="P" />
                    <use href="#I" y="105" fill="url(#F)" className="Q" />
                    <use href="#J" y="105" className="S" />
                    <text
                        transform="matrix(1.0616 0 0 1 632 382)"
                        className="T U"
                    >
                        1
                    </text>
                </g>
                <g className="sld-numb2">
                    <use href="#H" x="170.6" y="-90" className="P" />
                    <use
                        href="#I"
                        x="170.7"
                        y="-90"
                        fill="url(#F)"
                        className="Q"
                    />
                    <use href="#J" x="170.7" y="-90" className="S" />
                    <text
                        transform="matrix(1.0616 0 0 1 803 186.5)"
                        className="T U"
                    >
                        2
                    </text>
                </g>
                <g className="sld-numb3">
                    <use href="#H" x="348" y="57.5" className="P" />
                    <use
                        href="#I"
                        x="348"
                        y="57.5"
                        fill="url(#F)"
                        className="Q"
                    />
                    <use href="#J" x="348" y="57.5" className="S" />
                    <text
                        transform="matrix(1.0616 0 0 1 980 334)"
                        className="T U"
                    >
                        3
                    </text>
                </g>
                <g className="sld-numb4">
                    <use href="#H" x="483" y="-28.5" className="P" />
                    <use
                        href="#I"
                        x="483"
                        y="-28.5"
                        fill="url(#F)"
                        className="Q"
                    />
                    <use href="#J" x="483" y="-28.5" className="S" />
                    <text
                        transform="matrix(1.0616 0 0 1 1114.5 249.5)"
                        className="T U"
                    >
                        4
                    </text>
                </g>
                <g className="sld-numb5">
                    <use href="#H" x="632" y="127" className="P" />
                    <use
                        href="#I"
                        x="632"
                        y="127"
                        fill="url(#F)"
                        className="Q"
                    />
                    <use href="#J" x="632" y="127" className="S" />
                    <text
                        transform="matrix(1.0616 0 0 1 1265 404)"
                        className="T U"
                    >
                        5
                    </text>
                </g>

                <defs>
                    <path
                        id="H"
                        d="M640 248.7c-16.4 0-34.6 19.1-1.2 53.4.4.4.7.6 1.2.6.4 0 .7-.2 1.2-.6 33.5-34.3 16.3-53.4-1.2-53.4z"
                    />
                    <path
                        id="I"
                        d="M640.1 248.7c17.3 0 34.6 19.1 1.2 53.4-.4.4-.7.6-1.2.6v-54z"
                    />
                    <path
                        id="J"
                        d="M640 252.4c-15 0-26.8 19.8-1 35.8.4.3.6.4 1 .4s.6-.1 1-.4c26.4-17.7 13.9-35.8-1-35.8z"
                    />
                </defs>
            </svg>
        </div>
    );
};
export default React.memo(SliderNumber);
