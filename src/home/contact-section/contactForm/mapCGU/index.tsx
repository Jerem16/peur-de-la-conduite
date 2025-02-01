import React from "react";
import InputCheckbox from "../../../../components/checkbox/inputCheckbox";

interface DrivingFormProps {
    cguState: boolean | null;
    onCguChange: (condition: boolean | null) => void;
    newEvent: boolean | null;
    onNewEventChange: (condition: boolean | null) => void;
}

const MapQuestions: React.FC<DrivingFormProps> = ({
    cguState,
    onCguChange,
    newEvent,
    onNewEventChange,
}) => {
    const options = [
        {
            id: "cgu",
            question: "J'ai lu et accepté les conditions d'utilisation.",
            name: "conditions_utilisation", // 🔥 Correction ici
            options: [
                {
                    id: "cguOk",
                    label: "Oui",
                    value: "oui",
                    condition: true,
                },
            ],
            state: cguState,
            onOptionChange: onCguChange,
        },
        {
            id: "newEvent",
            question: "Je souhaite être informé des prochains évènements.",
            name: "info_evenements", // 🔥 Correction ici
            options: [
                {
                    id: "newEventOk",
                    label: "Oui",
                    value: "oui",
                    condition: true,
                },
            ],
            state: newEvent,
            onOptionChange: onNewEventChange,
        },
    ];
    const handleInputClick = (
        onOptionChange: (condition: boolean | null) => void,
        state: boolean | null,
        condition: boolean
    ) => {
        onOptionChange(state === condition ? null : condition);
    };
    return (
        <div className="form-questions flx-c">
            {options.map((option) => (
                <div className="questions" key={option.id}>
                    <div className="response boolean-checkbox">
                        {option.options.map((opt) => (
                            <InputCheckbox
                                key={opt.id}
                                option={opt}
                                state={option.state}
                                handleInputClick={(condition) =>
                                    handleInputClick(
                                        option.onOptionChange,
                                        option.state,
                                        condition
                                    )
                                }
                                question={option.name}
                            />
                        ))}
                    </div>
                    <p>{option.question}</p>
                </div>
            ))}
        </div>
    );
};

export default MapQuestions;
