const capabilities = [
  {
    title: "Data & analytics",
    description: "Python, SQL, PostgreSQL, Tableau, Power BI, Excel",
  },
  {
    title: "AI & automation",
    description:
      "OpenAI API, MCP tooling, prompt engineering, workflow automation",
  },
  {
    title: "Product & collaboration",
    description:
      "Product requirements, workflow design, prototyping, stakeholder communication",
  },
];
export default function Skills() {
  return (
    <div className="capabilities" aria-labelledby="capabilities-heading">
      <h3 id="capabilities-heading">What I work with</h3>
      <dl>
        {capabilities.map((item) => (
          <div key={item.title}>
            <dt>{item.title}</dt>
            <dd>{item.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
