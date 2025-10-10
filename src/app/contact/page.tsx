"use client";

import React, { useState, useRef, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
    const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
    const [showPopup, setShowPopup] = useState(false);
    const formRef = useRef<HTMLFormElement | null>(null);

    if (!formId) {
        return (
            <p className="text-red-600 font-semibold">
                Error: Formspree ID not set. Make sure NEXT_PUBLIC_FORMSPREE_ID is defined.
            </p>
        );
    }

    const [state, handleSubmit] = useForm(formId);

    // Show popup on success
    useEffect(() => {
        if (state.succeeded) {
            setShowPopup(true);
        }
    }, [state.succeeded]);

    // Handle closing popup and resetting form
    const handleClosePopup = () => {
        setShowPopup(false);
        formRef.current?.reset(); // ✅ Clear all form fields
    };

    return (
        <>
            {/* Contact Form */}
            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="max-w-xl mx-auto mt-10 space-y-6 bg-[var(--card-bg)] shadow-xl rounded-2xl p-8 transition-all duration-300 border border-[var(--border-color)]"
            >
                <h2 className="text-3xl font-semibold text-center text-[var(--card-text)] mb-4">
                    Get in Touch
                </h2>
                <p className="text-center text-sm text-[var(--muted)] mb-6">
                    Have a question, an idea, or just want to say hello? I’d love to hear from you!
                </p>

                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label
                            htmlFor="firstName"
                            className="block text-sm font-medium text-[var(--card-text)] mb-1"
                        >
                            First Name<span className="text-amber-500">*</span>
                        </label>
                        <input
                            id="firstName"
                            type="text"
                            name="FirstName"
                            placeholder="First Name"
                            required
                            className="w-full rounded-lg bg-[var(--card-bg)] text-[var(--card-text)] p-3 border border-[var(--border-color)] shadow-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="lastName"
                            className="block text-sm font-medium text-[var(--card-text)] mb-1"
                        >
                            Last Name
                        </label>
                        <input
                            id="lastName"
                            type="text"
                            name="LastName"
                            placeholder="Last Name"
                            className="w-full rounded-lg bg-[var(--card-bg)] text-[var(--card-text)] p-3 border border-[var(--border-color)] shadow-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                        />
                    </div>
                </div>

                {/* Email */}
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[var(--card-text)] mb-1"
                    >
                        Email Address<span className="text-amber-500">*</span>
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        required
                        className="w-full rounded-lg bg-[var(--card-bg)] text-[var(--card-text)] p-3 border border-[var(--border-color)] shadow-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                {/* Message */}
                <div>
                    <label
                        htmlFor="message"
                        className="block text-sm font-medium text-[var(--card-text)] mb-1"
                    >
                        Message<span className="text-amber-500">*</span>
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Write your message here..."
                        required
                        className="w-full rounded-lg bg-[var(--card-bg)] text-[var(--card-text)] p-3 border border-[var(--border-color)] shadow-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white resize-none"
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                {/* Submit */}
                <div className="text-center">
                    <button
                        type="submit"
                        disabled={state.submitting}
                        className="w-full sm:w-auto px-8 py-3 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed
                            bg-[var(--accent-bg)] text-[var(--accent-text)] hover:bg-[var(--accent-hover)]"
                    >
                        {state.submitting ? "Sending..." : "Send Message"}
                    </button>
                </div>
            </form>

            {/* Success Popup */}
            <AnimatePresence>
                {showPopup && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-[var(--card-bg)] text-[var(--card-text)] rounded-2xl p-8 shadow-2xl max-w-sm text-center border border-[var(--border-color)]"
                        >
                            <h3 className="text-2xl font-semibold mb-4">✨ Message Sent!</h3>
                            <p className="text-[var(--muted)] mb-6">
                                Thanks for reaching out! I’ll get back to you soon.
                            </p>
                            <button
                                onClick={handleClosePopup}
                                className="px-6 py-2 rounded-lg bg-[var(--accent-bg)] text-[var(--accent-text)] hover:bg-[var(--accent-hover)] transition-all duration-200"
                            >
                                Close
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
