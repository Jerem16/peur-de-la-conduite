import React from "react";

const Arrow = ({ className, ariaLabel, onClick }) => {
    return (
        <button
            className={`fa-Arrow ${className}`}
            aria-label={ariaLabel}
            onClick={onClick}
            tabIndex={0}
        >
            <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon"
            >
                <polyline points="9 18 15 12 9 6" />
            </svg>
        </button>
    );
};

export default React.memo(Arrow);
