import Skills from "@/components/Skills";

export default function About() {
  return (
    <section
      id="about"
      className="about-section section-space"
      tabIndex={-1}
      aria-labelledby="about-heading"
    >
      <div className="section-shell about-layout">
        <div className="about-copy">
          <h2 id="about-heading">Technology starts with people.</h2>
          <p className="about-lead">
            My background in computational social science shapes how I build:
            understand the behavior, define the problem, then choose the tools.
          </p>
          <p>
            I’ve applied that approach to security analytics at Sony Pictures,
            AI product development at Cognos, and content workflows at Ritmo
            Labs. I enjoy connecting technical work with clear requirements and
            useful outcomes.
          </p>
          <p>I’m based in Los Angeles and fluent in English and Spanish.</p>
        </div>
        <div className="about-facts">
          <div className="education">
            <h3>University of California San Diego</h3>
            <p>B.S. Political Science — Data Analytics</p>
            <p>Minor in Computational Social Science</p>
            <p className="education-details">
              Class of 2023 <span aria-hidden="true">/</span> Cum Laude{" "}
              <span aria-hidden="true">/</span> 3.92 GPA
            </p>
          </div>
          <Skills />
        </div>
      </div>
    </section>
  );
}
