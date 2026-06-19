"use client";

import { FormEvent, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";

type Locale = "en" | "es";
type Errors = Partial<Record<"name" | "phone" | "email" | "message" | "consent", string>>;

const COPY = {
  en: {
    labels: {
      name: "Your name",
      phone: "Best phone number",
      email: "Email address",
      language: "Preferred language",
      message: "Briefly, what's happening?",
      consent: "I understand that submitting this form does not create an attorney-client relationship and is not a guarantee of representation.",
    },
    help: {
      name: "As it should appear on legal documents.",
      phone: "Digits, spaces, and hyphens.",
      email: "We respond within 24 business hours.",
      message: "Up to 500 characters. Skip any detail that would identify your child.",
    },
    errors: {
      name: "Please enter your name.",
      phone: "Please enter a phone number using digits, spaces, or hyphens.",
      email: "Please enter a valid email address.",
      message: "Please tell us briefly what's happening.",
      consent: "Please confirm that you understand this form is not a guarantee of representation.",
    },
    radioEnglish: "English",
    radioSpanish: "Español",
    submit: "Send message",
    sending: "Sending…",
    summaryHeading: "Please correct the following:",
    successHeading: "Thank you. We'll be in touch.",
    successBody: "We respond within 24 business hours. If your situation is urgent, please call us at (510) 479-0003.",
    counter: (n: number) => `${n} / 500 characters`,
    required: "required",
  },
  es: {
    labels: {
      name: "Su nombre",
      phone: "Mejor número de teléfono",
      email: "Correo electrónico",
      language: "Idioma preferido",
      message: "Brevemente, ¿qué está sucediendo?",
      consent: "Entiendo que enviar este formulario no crea una relación abogado-cliente y no es una garantía de representación.",
    },
    help: {
      name: "Como debe aparecer en documentos legales.",
      phone: "Dígitos, espacios y guiones.",
      email: "Respondemos dentro de 24 horas hábiles.",
      message: "Hasta 500 caracteres. Omita detalles que puedan identificar a su hijo.",
    },
    errors: {
      name: "Por favor ingrese su nombre.",
      phone: "Por favor ingrese un número de teléfono usando dígitos, espacios o guiones.",
      email: "Por favor ingrese un correo electrónico válido.",
      message: "Por favor díganos brevemente qué está sucediendo.",
      consent: "Por favor confirme que entiende que este formulario no es una garantía de representación.",
    },
    radioEnglish: "English",
    radioSpanish: "Español",
    submit: "Enviar mensaje",
    sending: "Enviando…",
    summaryHeading: "Por favor corrija lo siguiente:",
    successHeading: "Gracias. Nos comunicaremos con usted.",
    successBody: "Respondemos dentro de 24 horas hábiles. Si su situación es urgente, llame al (510) 479-0003.",
    counter: (n: number) => `${n} / 500 caracteres`,
    required: "obligatorio",
  },
} as const;

type Props = { locale: Locale };

export default function ContactForm({ locale }: Props) {
  const copy = COPY[locale];
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [messageLength, setMessageLength] = useState(0);
  const successHeadingRef = useRef<HTMLHeadingElement | null>(null);
  const errorSummaryRef = useRef<HTMLDivElement | null>(null);

  function validate(form: HTMLFormElement): Errors {
    const data = new FormData(form);
    const e: Errors = {};
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const consent = data.get("consent");

    if (!name) e.name = copy.errors.name;
    if (!/^[\d\s().+-]{7,}$/.test(phone)) e.phone = copy.errors.phone;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = copy.errors.email;
    if (!message) e.message = copy.errors.message;
    if (!consent) e.consent = copy.errors.consent;

    return e;
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const found = validate(form);
    if (Object.keys(found).length > 0) {
      setErrors(found);
      setTimeout(() => errorSummaryRef.current?.focus(), 0);
      return;
    }

    setErrors({});
    setSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: new FormData(form),
      });

      if (!response.ok) {
        throw new Error("Contact submission failed");
      }

      setSubmitted(true);
      form.reset();
      setMessageLength(0);
      setTimeout(() => successHeadingRef.current?.focus(), 0);
    } catch {
      setErrors({
        name: locale === "es" ? "Algo salió mal. Por favor intente de nuevo." : "Something went wrong. Please try again.",
      });
      setTimeout(() => errorSummaryRef.current?.focus(), 0);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="card bg-[color:var(--surface-raised)] border-l-4 border-l-[color:var(--state-success,#2D6A4F)]"
      >
        <CheckCircle2
          aria-hidden="true"
          className="h-10 w-10 text-[color:var(--brand-secondary)] mb-4"
          strokeWidth={1.5}
        />
        <h2
          ref={successHeadingRef}
          tabIndex={-1}
          className="font-serif text-[color:var(--brand-primary)] mb-3"
          style={{ fontSize: "1.625rem", lineHeight: 1.2, fontWeight: 700 }}
        >
          {copy.successHeading}
        </h2>
        <p className="text-[color:var(--text-primary)]">{copy.successBody}</p>
      </div>
    );
  }

  const errorList = Object.entries(errors);
  const hasErrors = errorList.length > 0;

  return (
    <form noValidate onSubmit={onSubmit} aria-describedby={hasErrors ? "form-error-summary" : undefined}>
      {hasErrors && (
        <div
          id="form-error-summary"
          ref={errorSummaryRef}
          tabIndex={-1}
          role="alert"
          aria-live="assertive"
          className="card border-l-4 border-l-[color:var(--error)] bg-[color:var(--surface-raised)] mb-8"
        >
          <h2 className="font-sans font-bold text-[color:var(--error)] mb-3" style={{ fontSize: "1.125rem" }}>
            {copy.summaryHeading}
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            {errorList.map(([field, msg]) => (
              <li key={field}>
                <a href={`#field-${field}`} className="text-[color:var(--link)]">
                  {msg}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid gap-6">
        <Field
          id="name"
          name="name"
          label={copy.labels.name}
          help={copy.help.name}
          error={errors.name}
          requiredLabel={copy.required}
          required
          autoComplete="name"
        />
        <Field
          id="phone"
          name="phone"
          type="tel"
          inputMode="tel"
          label={copy.labels.phone}
          help={copy.help.phone}
          error={errors.phone}
          requiredLabel={copy.required}
          required
          autoComplete="tel"
        />
        <Field
          id="email"
          name="email"
          type="email"
          label={copy.labels.email}
          help={copy.help.email}
          error={errors.email}
          requiredLabel={copy.required}
          required
          autoComplete="email"
        />

        <fieldset className="border-0 p-0">
          <legend className="form-label mb-2">{copy.labels.language}</legend>
          <div className="flex gap-6">
            <label className="inline-flex items-center gap-2">
              <input type="radio" name="language" value="en" defaultChecked={locale === "en"} />
              <span>{copy.radioEnglish}</span>
            </label>
            <label className="inline-flex items-center gap-2">
              <input type="radio" name="language" value="es" defaultChecked={locale === "es"} />
              <span>{copy.radioSpanish}</span>
            </label>
          </div>
        </fieldset>

        <div>
          <label htmlFor="field-message" className="form-label">
            {copy.labels.message}
            <span aria-hidden="true" className="text-[color:var(--brand-accent)] ml-1">*</span>
            <span className="sr-only"> ({copy.required})</span>
          </label>
          <textarea
            id="field-message"
            name="message"
            className="form-textarea"
            maxLength={500}
            required
            aria-required="true"
            aria-invalid={!!errors.message}
            aria-describedby={`help-message ${errors.message ? "err-message" : ""}`.trim()}
            onChange={(e) => setMessageLength(e.target.value.length)}
            rows={5}
          />
          <p id="help-message" className="form-help">
            {copy.help.message} <span aria-live="polite" className="ml-2 text-[color:var(--text-secondary)]">{copy.counter(messageLength)}</span>
          </p>
          {errors.message && (
            <p id="err-message" className="form-error" role="alert">
              {errors.message}
            </p>
          )}
        </div>

        <div>
          <label className="inline-flex items-start gap-3">
            <input
              type="checkbox"
              id="field-consent"
              name="consent"
              required
              aria-required="true"
              aria-invalid={!!errors.consent}
              aria-describedby={errors.consent ? "err-consent" : undefined}
              className="mt-1 h-5 w-5"
            />
            <span className="text-[0.9375rem] leading-relaxed">{copy.labels.consent}</span>
          </label>
          {errors.consent && (
            <p id="err-consent" className="form-error mt-1" role="alert">
              {errors.consent}
            </p>
          )}
        </div>

        <div className="pt-2">
          <button type="submit" className="btn btn-cta btn-large w-full sm:w-auto" aria-busy={submitting} disabled={submitting}>
            {submitting ? copy.sending : copy.submit}
          </button>
        </div>
      </div>
    </form>
  );
}

type FieldProps = {
  id: string;
  name: string;
  label: string;
  type?: string;
  inputMode?: "text" | "tel" | "email";
  help?: string;
  error?: string;
  required?: boolean;
  requiredLabel: string;
  autoComplete?: string;
};

function Field({ id, name, label, type = "text", inputMode, help, error, required, requiredLabel, autoComplete }: FieldProps) {
  const fieldId = `field-${id}`;
  const helpId = help ? `help-${id}` : undefined;
  const errorId = error ? `err-${id}` : undefined;
  const describedBy = [helpId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div>
      <label htmlFor={fieldId} className="form-label">
        {label}
        {required && (
          <>
            <span aria-hidden="true" className="text-[color:var(--brand-accent)] ml-1">*</span>
            <span className="sr-only"> ({requiredLabel})</span>
          </>
        )}
      </label>
      <input
        id={fieldId}
        name={name}
        type={type}
        inputMode={inputMode}
        autoComplete={autoComplete}
        className="form-input"
        required={required}
        aria-required={required}
        aria-invalid={!!error}
        aria-describedby={describedBy}
      />
      {help && (
        <p id={helpId} className="form-help">
          {help}
        </p>
      )}
      {error && (
        <p id={errorId} className="form-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
