import React from "react";
import RadioOption from "../../components/checkbox/RadioOption";
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
            <form method="get" className="srv-form flx-c">
                {options.map((option) => (
                    <RadioOption
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

export default RadioQuestionForm;
