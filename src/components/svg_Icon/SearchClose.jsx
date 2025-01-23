import React from "react";

const SearchClose = () => {
    return (
        <div className="close-search">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
            >
                <circle cx="9" cy="9" r="9" className="bg-color" />
                <g
                    fill="none"
                    className="icon-color"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M11.8 11.8L6.2 6.2" />
                    <path d="M6.2 11.8l5.6-5.6" />
                </g>
            </svg>
        </div>
    );
};
export default React.memo(SearchClose);
