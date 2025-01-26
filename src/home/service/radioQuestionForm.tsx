import React from "react";
import CheckedIcon from "../../components/svg_Icon/utils/CheckedIcon";

interface Option {
    id: string;
    label: string;
    value: string;
    condition: boolean;
}

interface RadioQuestionFormProps {
    question: string;
    options: Option[] | [];
    state: boolean | null;
    onOptionChange: (condition: boolean | null) => void;
}

const RadioQuestionForm: React.FC<RadioQuestionFormProps> = ({
    question,
    options,
    state,
    onOptionChange,
}) => {
    const handleInputClick = (condition: boolean) => {
        if (state === condition) {
            onOptionChange(null);
        } else {
            onOptionChange(condition); 
        }
    };

    return (
        <div className="form">
            <p className="srv-ask">{question}</p>
            <form method="get" action="" className="srv-form flx-c">
                {options.map((option) => (
                    <React.Fragment key={option.id}>
                        <label className="flx-c" htmlFor={option.id}>
                            {option.label}
                        </label>
                        <input
                            type="radio"
                            name={question}
                            value={option.value}
                            id={option.id}
                            checked={state === option.condition}
                            className={
                                state === option.condition ? "checked" : ""
                            }
                            onClick={() => handleInputClick(option.condition)} 
                            readOnly
                        />
                        <span
                            className={`flx-c ${
                                state === option.condition ? "checked" : ""
                            }`}
                        >
                            {state === option.condition ? <CheckedIcon /> : ""}
                        </span>
                    </React.Fragment>
                ))}
            </form>
        </div>
    );
};

export default RadioQuestionForm;
