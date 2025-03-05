"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { useForm } from "@formspree/react";
import ContactFormTitle from "./contactFormTitle";
import ContactQuestions from "./contactQuestions";
import ContactCGU from "./contactCGU";
import Form from "./form";
import FormSuite from "./formSuite";
import {
    validateName,
    validateEmail,
    validatePhoneNumber,
    validateMessage,
} from "../../../utils/validationForm";

// Typage des données du formulaire
interface FormData {
    prenom: string;
    nom: string;
    email: string;
    telephone: string;
    message: string;
}

// Typage des erreurs
type Errors = Partial<Record<keyof FormData, string>>;

const ContactForm = () => {
    const [state, handleSubmitFormspree] = useForm("xjkgrarq");
    const [errors, setErrors] = useState<Errors>({});
    const [formData, setFormData] = useState<FormData>({
        prenom: "",
        nom: "",
        email: "",
        telephone: "",
        message: "",
    });

    // Validation globale des champs
    const validateFields = (): boolean => {
        let newErrors: Errors = {
            prenom: validateName(formData.prenom),
            nom: validateName(formData.nom),
            email: validateEmail(formData.email),
            telephone: formData.telephone
                ? validatePhoneNumber(formData.telephone)
                : "",
            message: validateMessage(formData.message),
        };

        // Filtrer les erreurs vides
        newErrors = Object.fromEntries(
            Object.entries(newErrors).filter(([, value]) => Boolean(value))
        ) as Errors;

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Gestion du changement des champs
    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value });

        let error = "";
        if (name === "email") error = validateEmail(value);
        else if (name === "telephone") error = validatePhoneNumber(value);
        else if (name === "message") error = validateMessage(value);
        else error = validateName(value);

        setErrors({ ...errors, [name]: error });
    };

    // Gestion de l'envoi du formulaire
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateFields()) {
            await handleSubmitFormspree(e);
            setFormData({
                prenom: "",
                nom: "",
                email: "",
                telephone: "",
                message: "",
            });
        }
    };

    return (
        <form className="ctc-form" method="POST" onSubmit={handleSubmit}>
            <ContactFormTitle />
            <ContactQuestions />
            <Form
                formData={formData}
                errors={errors}
                handleChange={handleChange}
                state={state}
            />
            <FormSuite
                formData={formData}
                errors={errors}
                handleChange={handleChange}
                state={state}
            />
            <ContactCGU />

            <div className="endOF">
                <button
                    type="submit"
                    className="btn-style_blue flx-c"
                    disabled={state.submitting}
                >
                    {state.submitting ? "Envoi en cours..." : "En voiture !"}
                </button>
            </div>

            {state.succeeded && (
                <div className="valid-message flx-c">
                    <p>Votre message a été envoyé avec succès !</p>
                    <p>Nous vous répondrons au plus vite.</p>
                </div>
            )}

            {state.errors && (
                <div className="valid-message flx-c">
                    <p className="error-spam">Une erreur est survenue !</p>
                    <p className="error-spam">Réessayez ulteriement.</p>
                </div>
            )}
        </form>
    );
};

export default ContactForm;
