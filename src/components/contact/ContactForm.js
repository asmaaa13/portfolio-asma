"use client";

import { useState } from "react";
import { site } from "@/data/site";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;
const initialValues = { name: "", email: "", subject: "", message: "" };

function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = "Merci d'indiquer votre nom.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Adresse email invalide.";
  if (values.message.trim().length < 10) errors.message = "Votre message doit contenir au moins 10 caractères.";
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    if (errors[name]) setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    // Sans Formspree configuré : on ouvre la messagerie du visiteur.
    if (!FORMSPREE_ID) {
      const subject = encodeURIComponent(values.subject || `Contact depuis le portfolio – ${values.name}`);
      const body = encodeURIComponent(`${values.message}\n\n${values.name}\n${values.email}`);
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Échec de l'envoi");
      setStatus("success");
      setValues(initialValues);
    } catch {
      setStatus("error");
    }
  };

  const fieldClass = (name) => `form-control${errors[name] ? " is-invalid" : ""}`;

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="row g-3">
        <div className="col-12 col-md-6">
          <label htmlFor="name" className="form-label">
            Nom
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            className={fieldClass("name")}
            value={values.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            required
          />
          {errors.name && (
            <p id="name-error" className="invalid-feedback">
              {errors.name}
            </p>
          )}
        </div>

        <div className="col-12 col-md-6">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={fieldClass("email")}
            value={values.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            required
          />
          {errors.email && (
            <p id="email-error" className="invalid-feedback">
              {errors.email}
            </p>
          )}
        </div>

        <div className="col-12">
          <label htmlFor="subject" className="form-label">
            Sujet <span className="text-secondary fw-normal">(facultatif)</span>
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            className="form-control"
            value={values.subject}
            onChange={handleChange}
          />
        </div>

        <div className="col-12">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            className={fieldClass("message")}
            value={values.message}
            onChange={handleChange}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            required
          />
          {errors.message && (
            <p id="message-error" className="invalid-feedback">
              {errors.message}
            </p>
          )}
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary btn-lg" disabled={status === "sending"}>
            {status === "sending" ? "Envoi en cours…" : "Envoyer le message"}
          </button>
        </div>

        <div className="col-12" aria-live="polite">
          {status === "success" && (
            <p className="alert alert-success mb-0">Merci ! Votre message a bien été envoyé, je vous réponds rapidement.</p>
          )}
          {status === "error" && (
            <p className="alert alert-danger mb-0">
              Une erreur est survenue. Vous pouvez m&apos;écrire directement à{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
