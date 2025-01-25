import { ServiceContent, ServiceForm } from "../interfaces/content";

export const serviceContent: ServiceContent[] = [
    {
        description:
            "Découvre un aperçu de mes services conçus spécialement pour répondre aux besoins des conducteurs débutants et confirmés : ",
    },
];
export const serviceForm: ServiceForm[] = [
    {
        id: "permit",
        question: "Avez-vous le permis de conduire ?",
        name: "permis",
        options: [
            { id: "permisOk", label: "Oui", value: "oui", condition: true },
            { id: "permisKo", label: "Non", value: "non", condition: false },
        ],
    },
    {
        id: "supervised",
        question: "Conduite accompagnée ou supervisée ?",
        name: "supervised",
        options: [
            { id: "AACOk", label: "Oui", value: "oui", condition: true },
            { id: "AACKo", label: "Non", value: "non", condition: false },
        ],
    },
];
