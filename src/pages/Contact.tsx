import { useState } from "react";
import SectionHeading from "../components/SectionHeading";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${name || "the Watersafe Hub website"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:nael.thuranira@akamom.org?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <div className="max-w-5xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-2 gap-14">
      <div>
        <SectionHeading
          title="Get in touch"
          lede="Questions about a guide, a suggestion for the site, or a correction to something we've written — we'd like to hear it."
        />

        <div className="mt-10 space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-full bg-teal/10 text-teal flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="3" y="5" width="18" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-ink/50">Email</p>
              <a
                href="mailto:nael.thuranira@akamom.org"
                className="font-semibold text-deep hover:text-teal"
              >
                nael.thuranira@akamom.org
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-full bg-teal/10 text-teal flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path
                  d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v3a2 2 0 0 1-2 2C10.5 20 4 13.5 4 6a2 2 0 0 1 1-2Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm text-ink/50">Phone</p>
              <a href="tel:0117716131" className="font-semibold text-deep hover:text-teal">
                0117 716 131
              </a>
            </div>
          </div>
        </div>

        <p className="mt-10 text-sm text-ink/55 leading-relaxed">
          Watersafe Hub is an educational resource, not an emergency
          service. If you or someone nearby is in immediate danger, call
          your local emergency number right away.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-foam rounded-2xl p-6 md:p-8 space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-deep mb-1.5">
            Your name
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border border-teal/20 bg-sand px-4 py-2.5 text-sm focus:border-teal outline-none"
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-deep mb-1.5">
            Your email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-teal/20 bg-sand px-4 py-2.5 text-sm focus:border-teal outline-none"
            placeholder="jane@example.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-deep mb-1.5">
            Message
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-lg border border-teal/20 bg-sand px-4 py-2.5 text-sm focus:border-teal outline-none resize-none"
            placeholder="How can we help?"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-teal text-sand font-semibold py-3 rounded-full hover:bg-deep transition-colors"
        >
          Send message
        </button>
        {sent && (
          <p className="text-sm text-teal text-center">
            Opening your email app to finish sending — thank you!
          </p>
        )}
      </form>
    </div>
  );
}
