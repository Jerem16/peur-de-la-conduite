import React from "react";

const SearchClose = () => {
    return (
        <div className="close-search">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 18 18"
                fill="none"
            >
                <circle cx="8.5" cy="8.5" r="8.5" className="bg-color" />
                <path
                    d="M11 11L8.5 8.5M8.5 8.5L6 6M8.5 8.5L11 6M8.5 8.5L6 11"
                    className="icon-color"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );
};
export default React.memo(SearchClose);
