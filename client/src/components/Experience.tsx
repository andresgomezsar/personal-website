const experiences = [
  {
    company: "Ritmo Labs",
    title: "AI Content & Growth",
    period: "June 2026–present",
    description:
      "Built an AI-powered workflow that turns music and long-form content into short-form videos, automating highlight selection, editing, and distribution. Scaled music promotion campaigns across 100+ TikTok and YouTube accounts with repeatable generation, scheduling, and publishing workflows.",
  },
  {
    company: "Cognos",
    title: "Founder & CEO",
    period: "May 2025–June 2026",
    description:
      "Led product discovery, requirements, and prototype development for an AI platform connecting conversational AI with wearable devices. Used user and developer feedback to shape the roadmap.",
  },
  {
    company: "Sony Pictures Entertainment",
    title: "Information Security Analyst, Human Risk & Analytics",
    period: "June 2023–May 2025",
    description:
      "Automated data-processing and reporting workflows, managed phishing program analytics for 12,000+ employees, and translated security requirements into practical guidance for new hires.",
  },
  {
    company: "University of Southern California",
    title: "NSF REU Research Fellow",
    period: "June–August 2022",
    description:
      "Analyzed qualitative research data and maintained a structured codebook for consistent analysis. Translated data-science training materials into Spanish to broaden access for research assistants.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-shell section-space experience-section"
      tabIndex={-1}
      aria-labelledby="experience-heading"
    >
      <div className="section-heading">
        <h2 id="experience-heading">Experience</h2>
        <p>
          A background spanning product development, enterprise analytics, and
          academic research.
        </p>
      </div>
      <ol className="experience-list">
        {experiences.map((experience) => (
          <li key={experience.company}>
            <p className="experience-date">{experience.period}</p>
            <div>
              <h3>{experience.company}</h3>
              <p className="experience-role">{experience.title}</p>
              <p>{experience.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
