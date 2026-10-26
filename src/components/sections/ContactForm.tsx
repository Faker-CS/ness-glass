"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Checkbox, TextArea, TextField } from "@/components/ui/FormFields";
import { contactForm } from "@/data/landing";

/**
 * Appointment request form (Figma 31:4732). There is no backend: native validation runs,
 * then the form is cleared and a confirmation is announced.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);
  const { fields } = contactForm;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
    setSent(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      onInput={() => setSent(false)}
      className="flex flex-col gap-5 rounded-field p-4 backdrop-blur-panel"
    >
      <div className="flex flex-col gap-5">
        <div className="grid gap-5 sm:grid-cols-2 sm:gap-4">
          <TextField name="prenom" label={fields.firstName} autoComplete="given-name" required />
          <TextField name="nom" label={fields.lastName} autoComplete="family-name" required />
        </div>
        <TextField name="telephone" type="tel" label={fields.phone} autoComplete="tel" required />
        <TextField name="email" type="email" label={fields.email} autoComplete="email" required />
        <TextField
          name="code-postal"
          label={fields.postalCode}
          autoComplete="postal-code"
          inputMode="numeric"
          pattern="[0-9]{5}"
          title="5 chiffres"
          required
        />
        <TextArea name="message" label={fields.message} />
      </div>

      <Checkbox name="conditions" required>
        {contactForm.consent}
      </Checkbox>

      <div className="flex flex-col items-end gap-4 pt-4 pr-6">
        <Button type="submit" className="uppercase">
          {contactForm.submit}
        </Button>
        <p role="status" className="min-h-5 text-right text-snow">
          {sent ? contactForm.success : ""}
        </p>
      </div>
    </form>
  );
}
