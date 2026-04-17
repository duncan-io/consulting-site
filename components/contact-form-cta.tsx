"use client";

import { type FormEvent, useState } from "react";
import { contactEmail } from "@/lib/contact";

export function ContactFormCta() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const body = [
      name && `Name: ${name}`,
      email && `Email: ${email}`,
      "",
      message || "(No message provided)",
    ]
      .filter(Boolean)
      .join("\n");

    const subject = name
      ? `Consulting inquiry from ${name}`
      : "Consulting inquiry";

    const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  }

  return (
    <section className="bg-surface-container-low px-4 py-16 sm:px-8">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-xl bg-surface-container-lowest p-8 shadow-[0_40px_60px_-5px_rgba(26,28,31,0.06)] sm:p-12">
        <div
          className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/5 to-transparent"
          aria-hidden
        />
        <div className="relative z-10 flex flex-col gap-12 md:flex-row md:gap-16">
          <div className="md:w-1/2">
            <h2 className="font-headline text-[1.75rem] tracking-tight text-primary">
              Get in touch
            </h2>
            <p className="mt-3 text-on-surface-variant">
              Share a bit about your goals and I’ll follow up by email. Opens
              your mail app to send the message.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex w-full flex-col gap-8 md:w-1/2"
            noValidate
          >
            <div className="relative">
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="peer w-full border-0 border-b border-surface-container-highest bg-transparent px-0 py-2 font-sans text-foreground placeholder-transparent outline-none ring-0 transition-colors focus:border-secondary"
              />
              <label
                htmlFor="contact-name"
                className="pointer-events-none absolute left-0 top-2 font-sans text-base text-on-surface-variant transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-[0.6875rem] peer-focus:font-medium peer-focus:uppercase peer-focus:tracking-[0.05em] peer-focus:text-secondary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[0.6875rem] peer-[:not(:placeholder-shown)]:font-medium peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-[0.05em]"
              >
                Name
              </label>
            </div>

            <div className="relative">
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                inputMode="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="peer w-full border-0 border-b border-surface-container-highest bg-transparent px-0 py-2 font-sans text-foreground placeholder-transparent outline-none ring-0 transition-colors focus:border-secondary"
              />
              <label
                htmlFor="contact-email"
                className="pointer-events-none absolute left-0 top-2 font-sans text-base text-on-surface-variant transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-[0.6875rem] peer-focus:font-medium peer-focus:uppercase peer-focus:tracking-[0.05em] peer-focus:text-secondary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[0.6875rem] peer-[:not(:placeholder-shown)]:font-medium peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-[0.05em]"
              >
                Email
              </label>
            </div>

            <div className="relative">
              <textarea
                id="contact-message"
                name="message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder=" "
                className="peer w-full resize-none border-0 border-b border-surface-container-highest bg-transparent px-0 py-2 font-sans text-foreground placeholder-transparent outline-none ring-0 transition-colors focus:border-secondary"
              />
              <label
                htmlFor="contact-message"
                className="pointer-events-none absolute left-0 top-2 font-sans text-base text-on-surface-variant transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-[0.6875rem] peer-focus:font-medium peer-focus:uppercase peer-focus:tracking-[0.05em] peer-focus:text-secondary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[0.6875rem] peer-[:not(:placeholder-shown)]:font-medium peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-[0.05em]"
              >
                What are you hoping to solve?
              </label>
            </div>

            <button
              type="submit"
              className="self-start rounded-md bg-secondary px-8 py-3 font-headline font-bold text-on-secondary transition-colors hover:bg-secondary/90"
            >
              Email Duncan McKee
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
