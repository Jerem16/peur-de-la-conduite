import React from "react";
import CheckedIcon from "../svg_Icon/utils/CheckedIcon";

interface InputCheckboxProps {
    option: {
        id: string;
        label: string;
        value: string;
        condition: boolean;
    };
    state: boolean | null;
    handleInputClick: (condition: boolean) => void;
    question: string;
}

const InputCheckbox: React.FC<InputCheckboxProps> = ({
    option,
    state,
    handleInputClick,
    question,
}) => {
    return (
        <React.Fragment key={option.id}>
            <label className="flx-c" htmlFor={option.id}>
                {option.label}
            </label>
            <input
                type="checkbox"
                name={question}
                value={option.value}
                id={option.id}
                checked={state === option.condition}
                className={state === option.condition ? "checked" : ""}
                onChange={() => handleInputClick(option.condition)}
            />
            <span
                className={`flx-c checkbox-ico ${
                    state === option.condition ? "checked" : ""
                }`}
            >
                {state === option.condition ? <CheckedIcon /> : ""}
            </span>
        </React.Fragment>
    );
};

export default InputCheckbox;
