import React from "react";


const CloseIcon = ({ addClass }) => {
    return (
        <span className={`${addClass}`}>
            <svg
                viewBox="0 0 428.8 428.8"
                enableBackground="new 0 0 512 512"
                xmlSpace="preserve"
                className="closed"
            >
                <path
                    className="close-icon"
                    d="M418.2 366.9L265.5 214.2 417.8 61.9c14.1-14.1 14.1-36.9 0-50.9h0c-14-14.1-36.8-14.1-50.9 0L214.6 163.3 61.9 10.5c-14.1-14-36.9-14-50.9 0h0c-14.1 14.1-14.1 36.9 0 51l152.7 152.7L10.5 367.3c-14.1 14.1-14.1 36.9 0 50.9h0c14.1 14.1 36.9 14.1 50.9 0l153.1-153.1 152.7 152.7c14.1 14.1 36.9 14.1 50.9 0h0c14.2-14 14.2-36.8.1-50.9z"
                />
            </svg>
        </span>
    );
};
export default React.memo(CloseIcon);
