import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import profileImg from "@assets/583dd7c7138da18575d74ed21a583f256a0307433c5f1af734c3fe8827c44_1764981140804.jpeg";

export default function Hero() {
  return (
    <section
      id="hero"
      tabIndex={-1}
      className="hero section-shell"
      aria-labelledby="intro-heading"
    >
      <div className="hero-copy">
        <p className="intro-name">Andrés Gómez Sarmiento</p>
        <h1 id="intro-heading">
          I build AI products and data workflows, from discovery through implementation.
        </h1>
        <p className="hero-description">
          I’m a founder and analyst who turns user needs into working products.
          My work spans AI content tools, workflow automation, and security
          analytics, grounded in computational social science.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            View selected work <ArrowDown size={17} aria-hidden="true" />
          </a>
          <a
            className="button button-secondary"
            href="/resume.pdf"
            download="Andres-Gomez-Sarmiento-Resume.pdf"
          >
            Download résumé <Download size={17} aria-hidden="true" />
          </a>
        </div>
        <div className="social-links">
          <a
            href="https://github.com/andresgomezsar"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={17} aria-hidden="true" /> GitHub
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a
            href="https://linkedin.com/in/andresgomezsar"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={17} aria-hidden="true" /> LinkedIn
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
      <figure className="hero-portrait">
        <img
          src={profileImg}
          alt="Andrés standing beside the ocean under a pier"
          width="400"
          height="480"
          fetchPriority="high"
        />
        <figcaption>
          <span>Based in Los Angeles</span>
          <span>Working across AI, data, and human behavior</span>
        </figcaption>
      </figure>
    </section>
  );
}
