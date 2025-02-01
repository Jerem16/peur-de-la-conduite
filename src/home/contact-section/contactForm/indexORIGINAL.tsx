"use client";

import { useForm } from "@formspree/react";
import ContactFormTitle from "./contactFormTitle";
import ContactQuestions from "./contactQuestions";
import ContactCGU from "./contactCGU";
import Form from "./form";
import FormSuite from "./formSuite";

const ContactForm = () => {
    const [state, handleSubmit] = useForm("xvojloaj"); // Remplace par ton ID Formspree

    return (
        <form className="ctc-form" onSubmit={handleSubmit}>
            <ContactFormTitle />
            <ContactQuestions />
            <Form state={state} />
            <FormSuite state={state} />
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
