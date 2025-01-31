import React from "react";
import RadioQuestionForm from "../mapQuestions";

interface DrivingFormProps {
    isAccompanist: boolean | null;
    onAccompanistChange: (value: boolean) => void;
}

const AccompanistData: React.FC<DrivingFormProps> = ({
    isAccompanist,
    onAccompanistChange,
}) => {
    const serviceForm = [
        {
            id: "accompagnateur",
            question: "Vous êtes accompagnateur ?",
            name: "accompagnateur",
            options: [
                { id: "accompOk", label: "Oui", value: "oui", condition: true },
                {
                    id: "accompKo",
                    label: "Non",
                    value: "non",
                    condition: false,
                },
            ],
            state: isAccompanist,
            onOptionChange: onAccompanistChange,
        },
    ];

    return (
        <div className="segment accompanist-bg">
            <div className="card_header isAccompanist"></div>
            <div className="card_content isAccompanist">
                {serviceForm.map((question) => (
                    <RadioQuestionForm
                        key={question.id}
                        question={question.question}
                        options={question.options}
                        state={question.state}
                        onOptionChange={question.onOptionChange}
                    />
                ))}
            </div>
        </div>
    );
};

export default AccompanistData;
