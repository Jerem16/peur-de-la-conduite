import React from "react";

const Logo = () => {
    return (
        <div className="logo">
            <svg
                viewBox="0 0 90 90"
                aria-label="Logo et lien vers la page d'accueil"
            >
                <linearGradient
                    id="Alogo"
                    gradientUnits="userSpaceOnUse"
                    x1="25"
                    y1="0"
                    x2="65"
                    y2="90"
                >
                    <stop offset="0" stopColor="#39a7df" />
                    <stop offset="1" stopColor="#1a6de5" />
                </linearGradient>
                <circle
                    className="logo-circle"
                    cx="45"
                    cy="45"
                    r="45"
                    fill="url(#Alogo)"
                />
                <linearGradient
                    id="A"
                    gradientUnits="userSpaceOnUse"
                    x1="15.173"
                    y1="43.259"
                    x2="23.437"
                    y2="51.523"
                >
                    <stop offset="0" stopColor="#009ee2" />
                    <stop offset="1" stopColor="#1a6de5" />
                </linearGradient>
                <path
                    className="logo-bg"
                    d="M16.7 43c-4.8-.3-5 7.2-.2 8 2.5.3 9.1 1.2 9.3-3.2 0-3.6-4-4.2-9.1-4.8z"
                    fill="url(#A)"
                />
                <linearGradient
                    id="B"
                    gradientUnits="userSpaceOnUse"
                    x1="28.05"
                    y1="17.541"
                    x2="59.918"
                    y2="49.41"
                >
                    <stop offset="0" stopColor="#1f75ba" />
                    <stop offset=".327" stopColor="#38a4dd" />
                    <stop offset=".565" stopColor="#339bd6" />
                    <stop offset=".775" stopColor="#2b8bcb" />
                    <stop offset=".967" stopColor="#1f75ba" />
                    <stop offset="1" stopColor="#39a7df" />
                </linearGradient>
                <path
                    className="logo-bg"
                    d="M51.4 35.7c2.6 0 11.6.2 18.7 2v-.3L66 27.9c-1.4-3.3-4.5-5.5-7.8-5.5L46.7 22h-3.4l-11.5.4c-3.3 0-6.3 2.1-7.8 5.5l-4.3 9.5v.3c7.1-1.8 16.1-2 18.7-2h13z"
                    fill="url(#B)"
                />
                <linearGradient
                    id="C"
                    gradientUnits="userSpaceOnUse"
                    x1="40.868"
                    y1="51.606"
                    x2="51.182"
                    y2="62.5"
                >
                    <stop offset="0" stopColor="#009ee2" />
                    <stop offset="1" stopColor="#1a6de5" />
                </linearGradient>
                <path
                    className="logo-bg mouth"
                    d="M41.5 59.9h7.4c2.4 0 4.4-2.2 4.5-4.8H36.8c0 2.6 2.2 4.8 4.7 4.8z"
                    fill="url(#C)"
                />
                <linearGradient
                    id="D"
                    gradientUnits="userSpaceOnUse"
                    x1="12.994"
                    y1="12.994"
                    x2="76.634"
                    y2="76.634"
                >
                    <stop offset="0" stopColor="#009ee2" />
                    <stop offset="1" stopColor="#1a6de5" />
                </linearGradient>
                <path
                    className="logo-bg2"
                    d="M45 0C20.1 0 0 20.1 0 45s20.1 45 45 45 45-20.1 45-45S69.9 0 45 0zm34.5 43.9v18.6 3.3.1c0 2.2-1.7 4-3.7 4h-3.1c-2 0-3.7-1.8-3.7-4v-.1H21v.1c0 2.2-1.7 4-3.7 4h-3.1c-2 0-3.7-1.8-3.7-4v-.1-3.3V44c.3-2 2.1-3.5 4.6-4.7l-.6-1-1.5.3c-.9.1-4.2-1.2-4.2-2.7 0-2.2 1.9-2.7 4.2-2.7 2 0 4 1.1 4.2 2.5l.2.4 4.1-9.5c1.9-4.4 6-7.2 10.3-7.4l4.2-.1c0-1.7 1.4-3.2 3.2-3.2h11.7c1.7 0 3.1 1.3 3.2 3v.3l4.2.1c4.4 0 8.4 2.8 10.3 7.2l4.1 9.5.2-.4c.1-1.4 2.1-2.5 4.1-2.5 2.3 0 4.2.5 4.2 2.7 0 1.5-3.3 2.8-4.2 2.7l-1.5-.3-.6 1c2.5 1.2 4.3 2.7 4.6 4.7z"
                    fill="url(#D)"
                />
                <defs>
                    <linearGradient
                        id="E"
                        gradientUnits="userSpaceOnUse"
                        x1="66.778"
                        y1="43.169"
                        x2="75.766"
                        y2="52.158"
                    >
                        <stop offset="0" stopColor="#39a7df" />
                        <stop offset=".327" stopColor="#38a4dd" />
                        <stop offset=".515" stopColor="#339bd6" />
                        <stop offset=".775" stopColor="#2b8bcb" />
                        <stop offset=".967" stopColor="#1f75ba" />
                        <stop offset="1" stopColor="#1d70b7" />
                    </linearGradient>
                </defs>
                <path
                    className="logo-bg eyes"
                    d="M64.2 47.8c.2 4.4 6.8 3.5 9.3 3.2 4.9-.9 4.7-8.4-.2-8s-9.1 1.4-9.1 4.8z"
                    fill="url(#E)"
                />
                <path
                    d="M21.5 26.6l-4.1 9.5-.2-.4h0c-.2-1.4-2.2-2.5-4.2-2.5-2.3 0-4.2.5-4.2 2.7 0 1.5 3.3 2.8 4.2 2.7l1.5-.3.6 1c-2.5 1.2-4.3 2.7-4.6 4.7v18.5 3.3.1c0 2.2 1.7 4 3.7 4h3.1c2 0 3.7-1.8 3.7-4v-.1h48v.1c0 2.2 1.7 4 3.7 4h3.1c2 0 3.7-1.8 3.7-4v-.1-3.3-18.6c-.3-2-2.1-3.5-4.6-4.7l.6-1 1.5.3c.9.1 4.2-1.2 4.2-2.7 0-2.2-1.9-2.7-4.2-2.7-2 0-4 1.1-4.1 2.5h0l-.2.4-4.1-9.5c-1.9-4.4-5.9-7.2-10.3-7.2l-4.2-.1v-.3h0c-.1-1.7-1.5-3-3.2-3H39.2c-1.8 0-3.2 1.5-3.2 3.2h0l-4.2.1c-4.3.2-8.4 3-10.3 7.4zm-5 24.4c-4.8-.8-4.6-8.3.2-8 5.1.6 9.1 1.2 9.1 4.8-.2 4.4-6.8 3.5-9.3 3.2zm32.4 8.9h-7.4c-2.5 0-4.7-2.2-4.7-4.8h16.6c-.1 2.6-2.1 4.8-4.5 4.8zM73.3 43c4.9-.4 5.1 7.1.2 8-2.5.3-9.1 1.2-9.3-3.2 0-3.4 4.2-4.4 9.1-4.8zm-30-21h3.4l11.5.4c3.3 0 6.4 2.2 7.8 5.5l4.1 9.5v.3c-7.1-1.8-16.1-2-18.7-2h-13c-2.6 0-11.6.2-18.7 2v-.3h0l4.3-9.5c1.5-3.4 4.5-5.5 7.8-5.5l11.5-.4z"
                    className="logo-fp"
                />
            </svg>
        </div>
    );
};
export default React.memo(Logo);
