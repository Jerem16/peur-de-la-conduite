"use client";
import { useState } from "react";
import { useForm } from "@formspree/react";
import Form from "./form";

const ContactForm = () => {
    const [state, handleSubmitFormspree] = useForm("xvojloaj");
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        prenom: "",
        nom: "",
        email: "",
    });

    // Validation du prénom et du nom
    const validateName = (name) => {
        const regexNumber = /[0-9]/;
        if (!name || name.length < 2 || regexNumber.test(name)) {
            return "Ce champ doit contenir au moins 2 caractères et ne pas inclure de chiffres.";
        }
        return "";
    };

    // Validation de l'email
    const validateEmail = (email) => {
        const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegExp.test(email)) {
            return "Veuillez entrer une adresse e-mail valide.";
        }
        return "";
    };

    // Validation globale
    const validateFields = () => {
        let newErrors = {
            prenom: validateName(formData.prenom),
            nom: validateName(formData.nom),
            email: validateEmail(formData.email),
        };

        // Filtrer les erreurs vides
        newErrors = Object.fromEntries(
            Object.entries(newErrors).filter(([_, value]) => value)
        );

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Gestion du changement des champs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        setErrors({
            ...errors,
            [name]:
                name === "email" ? validateEmail(value) : validateName(value),
        });
    };

    // Gestion de l'envoi du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateFields()) {
            handleSubmitFormspree(e);
        }
    };

    return (
        <form className="ctc-form" onSubmit={handleSubmit}>
            <Form
                formData={formData}
                errors={errors}
                handleChange={handleChange}
                state={state}
            />

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
                <p className="valid-message flx-c">
                    Message envoyé avec succès !
                </p>
            )}
            {state.errors && (
                <p className="text-red-500 mt-2">
                    Une erreur est survenue, réessayez.
                </p>
            )}
        </form>
    );
};

export default ContactForm;
