import React from "react";

const Facebook = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90">
            <path
                d="M0 0v90h90V0H0zm64.3 25h-4.5a9.82 9.82 0 0 0-9.8 9.8v5.3h13.6L61.3 53H49.9v24.2H34.8V52.9h-9.1V39.3h9.1v-6.1a20.36 20.36 0 0 1 20.4-20.4h9.1V25z"
                className="bg-color"
            />
            <path
                d="M61.3 52.9L63.6 40H49.9v-5.3a9.82 9.82 0 0 1 9.8-9.8h4.5v-12h-9.1a20.36 20.36 0 0 0-20.4 20.4v6.1h-9.1V53h9.1v24.2h15.1V52.9h11.5z"
                className="icon-color"
            />
        </svg>
    );
};
export default React.memo(Facebook);
