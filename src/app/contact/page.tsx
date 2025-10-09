"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
    const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

    if (!formId) {
        // If the env var is missing, show a clear error message
        return (
            <p style={{ color: "red" }}>
                Error: Formspree ID not set. Make sure NEXT_PUBLIC_FORMSPREE_ID is
                defined.
            </p>
        );
    }

    const [state, handleSubmit] = useForm(formId);

    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" name="email" required />
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required />
            <ValidationError prefix="Message" field="message" errors={state.errors} />

            <button type="submit" disabled={state.submitting}>
                Submit
            </button>
        </form>
    );
}

export default ContactForm;
