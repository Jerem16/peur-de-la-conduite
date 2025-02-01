import { ValidationError } from "@formspree/react";

const FormSuite = ({ formData, errors, handleChange, state }) => {
    return (
        <div className="form">
            <label htmlFor="telephone">
                Téléphone{errors.telephone && errors.email && "*"}
                {errors.telephone && errors.email && (
                    <p className="error-message">{errors.telephone}</p>
                )}
            </label>
            <input
                type="tel"
                id="telephone"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
            />

            <ValidationError
                prefix="telephone"
                field="telephone"
                errors={state.errors}
            />

            <label htmlFor="message">
                Message
                {errors.message && "*"}
                {errors.message && (
                    <p className="error-message">{errors.message}</p>
                )}
            </label>
            <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                // required
            />

            <ValidationError
                prefix="message"
                field="message"
                errors={state.errors}
            />
        </div>
    );
};

export default FormSuite;
