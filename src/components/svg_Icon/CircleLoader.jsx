import React from "react";
import { useSelector } from "react-redux";


const CircleLoader = ({ addClass }) => {
    const currentTheme = useSelector((state) => state.theme.currentTheme);
    const lightTheme = useSelector((state) => state.theme.lightTheme);
    const darkTheme = useSelector((state) => state.theme.darkTheme);
    return (
        <span className={`${addClass}`}>
            <svg
                viewBox="0 0 289 289"
                // enableBackground="new 0 0 128 128"
                xmlSpace="preserve"
                className="loaderCircle"
            >
                <linearGradient
                    id="A"
                    gradientUnits="userSpaceOnUse"
                    x1="158.912"
                    y1="-14.912"
                    x2="302.912"
                    y2="129.088"
                >
                    <stop offset="0" stopColor={lightTheme} />
                    <stop offset=".5" stopColor={currentTheme} />
                    <stop offset="1" stopColor={darkTheme} />
                </linearGradient>
                <path
                    d="M144 0h0c79.5 0 144 64.5 144 144h0C288 64.5 223.5 0 144 0z"
                    fill="url(#A)"
                />
                <linearGradient
                    id="B"
                    gradientUnits="userSpaceOnUse"
                    x1="27.265"
                    y1="57.088"
                    x2="230.912"
                    y2="260.735"
                >
                    <stop offset="0" stopColor={lightTheme} />
                    <stop offset=".5" stopColor={currentTheme} />
                    <stop offset="1" stopColor={darkTheme} />
                </linearGradient>
                <path
                    d="M144 216c-39.8 0-72-32.2-72-72s32.2-72 72-72V0h0C64.5 0 0 64.5 0 144h0c0 79.5 64.5 144 144 144h0c79.5 0 144-64.5 144-144h0-72c0 39.8-32.2 72-72 72z"
                    fill="url(#B)"
                />
            </svg>
        </span>
    );
};
export default React.memo(CircleLoader);
