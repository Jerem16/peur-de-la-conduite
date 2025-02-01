import { ValidationError } from "@formspree/react";

const Form = ({ formData, errors, handleChange, state }) => {
    return (
        <div className="form">
            <label htmlFor="prenom">
                Prénom{errors.prenom && "*"}
                {errors.prenom && (
                    <p className="error-message">{errors.prenom}</p>
                )}
            </label>
            <input
                type="text"
                id="prenom"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
                // required
            />

            <ValidationError
                prefix="prenom"
                field="prenom"
                errors={state.errors}
            />

            <label htmlFor="nom">
                Nom{errors.nom && "*"}
                {errors.nom && <p className="error-message">{errors.nom}</p>}
            </label>
            <input
                type="text"
                id="nom"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                // required
            />

            <ValidationError prefix="Nom" field="nom" errors={state.errors} />

            <label htmlFor="email">
                E-mail{errors.email && errors.telephone && "*"}
                {errors.email && (
                    <p className="error-message">{errors.email}</p>
                )}
            </label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                // required
            />

            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
        </div>
    );
};

export default Form;
