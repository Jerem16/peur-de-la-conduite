import React from "react";
import RadioQuestionForm from "./radioQuestionForm";

interface DrivingFormProps {
    hasPermit: boolean | null;
    supervisedDriving: boolean | null;
    onPermitChange: (value: boolean) => void;
    onSupervisedChange: (value: boolean) => void;
}

const DrivingForm: React.FC<DrivingFormProps> = ({
    hasPermit,
    supervisedDriving,
    onPermitChange,
    onSupervisedChange,
}) => {
    const serviceForm = [
        {
            id: "permit",
            question: "Avez-vous le permis de conduire ?",
            name: "permis",
            options: [
                { id: "permisOk", label: "Oui", value: "oui", condition: true },
                {
                    id: "permisKo",
                    label: "Non",
                    value: "non",
                    condition: false,
                },
            ],
            state: hasPermit,
            onOptionChange: onPermitChange,
        },
        {
            id: "supervised",
            question: "Conduite accompagnée ou supervisée ?",
            name: "supervised",
            options: [
                { id: "AACOk", label: "Oui", value: "oui", condition: true },
                { id: "AACKo", label: "Non", value: "non", condition: false },
            ],
            state: supervisedDriving,
            onOptionChange: onSupervisedChange,
        },
    ];

    return (
        <>
            {serviceForm.map((question) => (
                <RadioQuestionForm
                    key={question.id}
                    question={question.question}
                    options={question.options}
                    state={question.state}
                    onOptionChange={question.onOptionChange}
                />
            ))}
        </>
    );
};

export default DrivingForm;
