import { ValidationError } from "@formspree/react";

const Form = ({ state }) => {
    return (
        <div className="form">
            <label htmlFor="prenom">Prénom</label>
            <input type="text" id="prenom" name="prenom" required />
            <ValidationError
                prefix="prenom"
                field="prenom"
                errors={state.errors}
            />

            <label htmlFor="nom">Nom</label>
            <input type="text" id="nom" name="nom" required />
            <ValidationError prefix="Nom" field="nom" errors={state.errors} />

            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" name="email" required />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
        </div>
    );
};

export default Form;
