import {
  ArrowDown,
  AudioLines,
  ChartNoAxesCombined,
  Check,
  ChevronDown,
  Clapperboard,
  ExternalLink,
  Github,
  Layers,
  MessageCircle,
  Radio,
  WandSparkles,
} from "lucide-react";

const workflow = [
  {
    label: "Source material",
    detail: "Music & long-form content",
    Icon: AudioLines,
  },
  {
    label: "Find the highlights",
    detail: "AI-assisted selection",
    Icon: WandSparkles,
  },
  {
    label: "Make it short-form",
    detail: "Editing & formatting",
    Icon: Clapperboard,
  },
  {
    label: "Reach an audience",
    detail: "Scheduling & distribution",
    Icon: Radio,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="work-section section-space"
      tabIndex={-1}
      aria-labelledby="work-heading"
    >
      <div className="section-shell">
        <div className="section-heading">
          <h2 id="work-heading">Selected work</h2>
          <p>
            From understanding the problem to building the workflow and
            measuring what changes.
          </p>
        </div>
        <article className="featured-work" aria-labelledby="ritmo-title">
          <div className="featured-copy">
            <div className="work-meta">
              <span>AI content & growth</span>
              <span>June 2026–present</span>
            </div>
            <h3 id="ritmo-title">Ritmo Labs</h3>
            <p className="work-lead">
              From long-form content to a short-form publishing workflow.
            </p>
            <p>
              I developed an AI-powered workflow for selecting highlights,
              editing and formatting videos, and distributing content across
              TikTok and YouTube.
            </p>
            <p className="inline-result">
              <strong>100+ accounts</strong>
              <span>
                across music promotion campaigns on TikTok and YouTube
              </span>
            </p>
            <a
              className="text-link"
              href="https://ritmolabs.co"
              target="_blank"
              rel="noreferrer"
            >
              Visit Ritmo Labs <ExternalLink size={16} aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
          <figure className="workflow-figure">
            <figcaption>The content workflow</figcaption>
            <ol className="workflow-list">
              {workflow.map(({ label, detail, Icon }, index) => (
                <li key={label}>
                  <div className="workflow-step">
                    <span className="workflow-icon">
                      <Icon size={22} aria-hidden="true" />
                    </span>
                    <div>
                      <strong>{label}</strong>
                      <span>{detail}</span>
                    </div>
                    {index === workflow.length - 1 && (
                      <Check
                        className="workflow-check"
                        size={18}
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  {index < workflow.length - 1 && (
                    <ArrowDown
                      className="workflow-arrow"
                      size={16}
                      aria-hidden="true"
                    />
                  )}
                </li>
              ))}
            </ol>
            <p>A process overview of the work I built.</p>
          </figure>
          <details className="case-details">
            <summary>
              How I approached it <ChevronDown size={18} aria-hidden="true" />
            </summary>
            <div className="case-detail-grid">
              <div>
                <h4>The problem</h4>
                <p>
                  High-volume promotion requires a repeatable way to turn source
                  content into videos that can be scheduled and published across
                  many accounts.
                </p>
              </div>
              <div>
                <h4>My contribution</h4>
                <p>
                  I developed the AI-assisted production workflow and designed
                  the operational steps for content generation, scheduling, and
                  publishing.
                </p>
              </div>
              <div>
                <h4>The result</h4>
                <p>
                  Scaled music promotion campaigns across more than 100 TikTok
                  and YouTube accounts, connecting content production with
                  distribution.
                </p>
              </div>
            </div>
          </details>
        </article>

        <div className="supporting-work">
          <article
            className="work-story sony-story"
            aria-labelledby="sony-title"
          >
            <div className="story-icon">
              <ChartNoAxesCombined size={24} aria-hidden="true" />
            </div>
            <div className="work-meta">
              <span>Human-risk analytics</span>
              <span>2023–2025</span>
            </div>
            <h3 id="sony-title">Sony Pictures Entertainment</h3>
            <p className="work-lead">
              Making security programs easier to measure and improve.
            </p>
            <p>
              I automated reporting and managed the analytical lifecycle of a
              phishing simulation program serving more than 12,000 employees.
            </p>
            <dl className="results-grid">
              <div>
                <dt>Manual work eliminated</dt>
                <dd>
                  50+ <span>hours/month</span>
                </dd>
              </div>
              <div>
                <dt>Threat-reporting rates</dt>
                <dd>+40%</dd>
              </div>
              <div>
                <dt>Training engagement</dt>
                <dd>+300%</dd>
              </div>
            </dl>
            <details className="case-details">
              <summary>
                What drove the results{" "}
                <ChevronDown size={18} aria-hidden="true" />
              </summary>
              <div className="detail-copy">
                <p>
                  I connected campaign design, audience targeting, measurement,
                  and executive reporting. Campaign and engagement data guided
                  program improvements, while automated reporting gave
                  leadership better visibility into performance.
                </p>
                <p>
                  Weekly onboarding sessions translated technical security
                  requirements into practical guidance for new employees.
                </p>
              </div>
            </details>
          </article>
          <article
            className="work-story cognos-story"
            aria-labelledby="cognos-title"
          >
            <div className="story-icon">
              <Layers size={24} aria-hidden="true" />
            </div>
            <div className="work-meta">
              <span>Product discovery & prototyping</span>
              <span>2025–2026</span>
            </div>
            <h3 id="cognos-title">Cognos</h3>
            <p className="work-lead">
              Connecting conversational AI with wearable devices.
            </p>
            <p>
              As founder and CEO, I translated user and developer feedback into
              product requirements, workflow designs, and a prioritized roadmap.
            </p>
            <div
              className="product-path"
              aria-label="Product development process"
            >
              <span>User needs</span>
              <span>Product requirements</span>
              <span>Working prototypes</span>
            </div>
            <p>
              I defined requirements for APIs, MCP tooling, and LLM-powered
              applications, using demos and stakeholder feedback to refine the
              product.
            </p>
            <details className="case-details">
              <summary>
                How I made product decisions{" "}
                <ChevronDown size={18} aria-hidden="true" />
              </summary>
              <div className="detail-copy">
                <p>
                  I took the product from problem discovery through working
                  prototypes, weighing feature priorities against user needs and
                  technical feasibility. Feedback from users, developers, and
                  stakeholders informed the proposed integrations and workflow
                  designs.
                </p>
              </div>
            </details>
          </article>
        </div>
        <div className="experiments">
          <div className="experiments-intro">
            <h3>Experiments</h3>
            <p>Smaller explorations in voice, learning, and personal AI.</p>
          </div>
          <article>
            <MessageCircle size={22} aria-hidden="true" />
            <div>
              <h4>Omi Voice Coach</h4>
              <p>
                A DevHouse SF hackathon project exploring personalized language
                practice from everyday conversations.
              </p>
              <a
                className="text-link"
                href="https://github.com/andresgomezsar/omi_voice_coach"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={16} aria-hidden="true" /> View source
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </article>
          <article>
            <AudioLines size={22} aria-hidden="true" />
            <div>
              <h4>Neuro Necklace</h4>
              <p>
                A local voice-memory pipeline exploring transcription, speaker
                identification, and conversation summaries with Whisper and MCP.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
