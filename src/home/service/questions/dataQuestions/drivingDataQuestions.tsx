import React from "react";
import RadioQuestionForm from "../mapQuestions";

interface DrivingFormProps {
    hasPermit: boolean | null;
    supervisedDriving: boolean | null;
    onPermitChange: (condition: boolean | null) => void;
    onSupervisedChange: (condition: boolean | null) => void;
}

const DrivingData: React.FC<DrivingFormProps> = ({
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
            {serviceForm.map((form) => (
                <RadioQuestionForm
                    key={form.id}
                    question={form.question}
                    options={form.options}
                    state={form.state}
                    onOptionChange={form.onOptionChange}
                />
            ))}
        </>
    );
};

export default DrivingData;
