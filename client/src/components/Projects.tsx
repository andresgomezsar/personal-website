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
        <article className="featured-work cognos-feature" aria-labelledby="ollamacognos-title">
          <div className="featured-copy">
            <div className="work-meta">
              <span>Developer tools & wearable integrations</span>
              <span>Cognos demo app</span>
            </div>
            <h3 id="ollamacognos-title">OllamaCognos</h3>
            <p className="work-lead">
              A working example of what developers could build with voice, memory, and health wearables.
            </p>
            <p>
              At Cognos, I built tools for developers to connect wearable data
              and AI memory to their own apps. OllamaCognos was one of several
              demos: it brings Oura health data, conversation context, and MCP
              tools into an assistant with local Ollama or LM Studio support.
            </p>
            <p className="news-globe-stack">React · Express · Ollama · MCP · Oura · Omi</p>
            <a className="text-link" href="https://github.com/andresgomezsar/OllamaCognos" target="_blank" rel="noreferrer">
              <Github size={16} aria-hidden="true" /> Explore OllamaCognos on GitHub
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
          <figure className="cognos-feature-preview">
            <a href="/projects/ollamacognos-dashboard.jpg" target="_blank" rel="noreferrer" aria-label="View full OllamaCognos dashboard screenshot (opens in a new tab)">
              <img src="/projects/ollamacognos-dashboard.jpg" alt="OllamaCognos dashboard with Oura health metrics, an offline local AI indicator, and MCP tools." width="1016" height="773" loading="lazy" decoding="async" />
            </a>
            <figcaption>The OllamaCognos dashboard, showing wearable data and assistant tools in one place.</figcaption>
          </figure>
        </article>
        <article className="featured-work news-globe-work" aria-labelledby="news-globe-title">
          <div className="featured-copy">
            <div className="work-meta">
              <span>AI agents & video generation</span>
              <span>Personal project</span>
            </div>
            <h3 id="news-globe-title">News Globe</h3>
            <p className="work-lead">
              Pick a place. Turn its news into a narrated video briefing.
            </p>
            <p>
              I built an interactive globe that turns a location and a few topics
              into a custom news broadcast. It brings together reporting from
              multiple sources, AI editorial decisions, voice narration, and
              animated video in one workflow.
            </p>
            <ol className="news-globe-steps">
              <li><strong>Find the story</strong><span>Gather articles and rank what matters.</span></li>
              <li><strong>Build the briefing</strong><span>Write the script, narrate it, and plan the visuals.</span></li>
              <li><strong>Render the broadcast</strong><span>Combine story photos, captions, and a rotating globe.</span></li>
            </ol>
            <p className="news-globe-stack">React · Express · OpenAI · Deepgram · Remotion</p>
            <a className="text-link" href="https://github.com/andresgomezsar/news-globe" target="_blank" rel="noreferrer">
              <Github size={16} aria-hidden="true" /> Explore on GitHub
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
          <div className="news-globe-preview" aria-label="News Globe screenshots">
            <figure>
              <a href="/projects/news-globe-setup.png" target="_blank" rel="noreferrer" aria-label="View full News Globe setup screenshot (opens in a new tab)">
                <img src="/projects/news-globe-setup.png" alt="News Globe controls with Tokyo selected, technology topics, and narration voices." width="470" height="898" loading="lazy" decoding="async" />
              </a>
              <figcaption>Choose a place and a voice</figcaption>
            </figure>
            <figure>
              <a href="/projects/news-globe-broadcast.png" target="_blank" rel="noreferrer" aria-label="View full generated broadcast screenshot (opens in a new tab)">
                <img src="/projects/news-globe-broadcast.png" alt="A generated Los Angeles briefing with a globe, source headline, key players, and captions." width="1080" height="1920" loading="lazy" decoding="async" />
              </a>
              <figcaption>A frame from a generated briefing</figcaption>
            </figure>
          </div>
          <details className="case-details">
            <summary>Inside the pipeline <ChevronDown size={18} aria-hidden="true" /></summary>
            <div className="case-detail-grid">
              <div>
                <h4>Reporting before writing</h4>
                <p>GDELT, Google News, and publisher RSS feeds supply the stories. An editor agent reads article text, ranks relevance, and searches again when coverage is thin.</p>
              </div>
              <div>
                <h4>Directing the video</h4>
                <p>A visual director plans photos, quotes, and statistics around the narration. Code checks its plan against source material and available assets before Remotion renders the video.</p>
              </div>
              <div>
                <h4>From one briefing to a routine</h4>
                <p>Live progress updates, a library of past briefings, and recurring schedules support the full workflow. Optional publishing connects finished videos to social platforms.</p>
              </div>
            </div>
          </details>
        </article>

        <article className="featured-work" aria-labelledby="lingualearn-title">
          <div className="featured-copy">
            <div className="work-meta">
              <span>Voice AI & language learning</span>
              <span>Built for DevHouse</span>
            </div>
            <h3 id="lingualearn-title">Omi LinguaLearn</h3>
            <p className="work-lead">Turn everyday conversations into something to practice.</p>
            <p>
              I built a language-learning prototype that connects Omi conversation
              memories with personalized speaking challenges. Gemini generates
              prompts and feedback, and a spaced-repetition queue turns corrections
              into future practice.
            </p>
            <p className="news-globe-stack">React · TypeScript · Express · Gemini · Google Cloud Storage</p>
            <a className="text-link" href="https://github.com/andresgomezsar/omi-lingualearn" target="_blank" rel="noreferrer">
              <Github size={16} aria-hidden="true" /> Explore the code
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
          <figure className="workflow-figure">
            <figcaption>From conversation to practice</figcaption>
            <ol className="workflow-list">
              {[
                { label: "Remember the context", detail: "Extract useful facts from Omi memories", Icon: AudioLines },
                { label: "Make it personal", detail: "Generate a speaking prompt with Gemini", Icon: WandSparkles },
                { label: "Learn from the response", detail: "Feedback on language and optional audio", Icon: Layers },
                { label: "Practice again", detail: "Schedule corrections for spaced review", Icon: Check },
              ].map(({ label, detail, Icon }, index) => (
                <li key={label}>
                  <div className="workflow-step">
                    <span className="workflow-icon"><Icon size={22} aria-hidden="true" /></span>
                    <div><strong>{label}</strong><span>{detail}</span></div>
                  </div>
                  {index < 3 && <ArrowDown className="workflow-arrow" size={16} aria-hidden="true" />}
                </li>
              ))}
            </ol>
            <p>A self-hosted prototype exploring a more personal practice loop.</p>
          </figure>
          <details className="case-details">
            <summary>Technical decisions <ChevronDown size={18} aria-hidden="true" /></summary>
            <div className="case-detail-grid">
              <div>
                <h4>Making audio usable</h4>
                <p>Receive PCM16 audio, assemble WAV segments, and keep recordings in account-scoped cloud storage for optional pronunciation feedback.</p>
              </div>
              <div>
                <h4>Protecting personal context</h4>
                <p>Separate browser sessions from authenticated webhook delivery, bound audio buffering, and clear private browser data on sign-out.</p>
              </div>
              <div>
                <h4>Keeping the scope honest</h4>
                <p>A single-operator prototype with in-memory state. The next step is durable storage and end-to-end testing with live Omi events.</p>
              </div>
            </div>
          </details>
        </article>

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
        </div>
        <div className="experiments">
          <div className="experiments-intro">
            <h3>Experiments</h3>
            <p>Smaller explorations in voice, learning, and personal AI.</p>
          </div>
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
