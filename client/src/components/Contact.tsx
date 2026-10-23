import { ArrowUpRight, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-shell section-space contact-section"
      tabIndex={-1}
      aria-labelledby="contact-heading"
    >
      <div>
        <h2 id="contact-heading">Let’s build something useful.</h2>
        <p>
          Have a role, a project, or a problem that connects AI, data, and
          people? I’d love to hear about it.
        </p>
      </div>
      <div className="contact-links">
        <a className="contact-email" href="mailto:andresgomezsar@gmail.com">
          <Mail size={21} aria-hidden="true" />
          <span>andresgomezsar@gmail.com</span>
        </a>
        <a
          className="text-link"
          href="https://linkedin.com/in/andresgomezsar"
          target="_blank"
          rel="noreferrer"
        >
          Connect on LinkedIn <ArrowUpRight size={17} aria-hidden="true" />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </section>
  );
}
