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
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon"
            >
                <path d="M9 18l6-6-6-6" />
            </svg>
        </button>
    );
};

export default React.memo(Arrow);
