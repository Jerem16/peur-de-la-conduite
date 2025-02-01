import React from "react";
import InputCheckbox from "../../../../components/checkbox/inputCheckbox";
interface Option {
    id: string;
    label: string;
    value: string;
    condition: boolean;
}

interface MapServicesQuestionsProps {
    question: string;
    options: Option[] | [];
    state: boolean | null;
    onOptionChange: (condition: boolean | null) => void;
}

const MapServicesQuestions: React.FC<MapServicesQuestionsProps> = ({
    question,
    options,
    state,
    onOptionChange,
}) => {
    const handleInputClick = (condition: boolean | null) => {
        if (state === condition) {
            onOptionChange(null);
        } else {
            onOptionChange(condition);
        }
    };

    return (
        <div className="form">
            <p className="srv-ask">{question}</p>
            <form method="get" className="srv-form boolean-checkbox flx-c">
                {options.map((option) => (
                    <InputCheckbox
                        key={option.id}
                        option={option}
                        state={state}
                        handleInputClick={handleInputClick}
                        question={question}
                    />
                ))}
            </form>
        </div>
    );
};

export default MapServicesQuestions;
