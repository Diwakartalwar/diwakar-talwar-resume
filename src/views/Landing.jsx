import RoleCard from "../components/RoleCard";

function Landing() {
  return (
    <div className="container">
      <h1 className="text-6xl md:text-5xl font-bold tracking-tight">Diwakar Talwar</h1>
      <p className="mt-4 text-gray-300 max-w-xl leading-relaxed">
        Data Analyst · Full Stack Developer · Product / UX  
        <br />
        I build clean, data-driven products.
      </p>
      {/* Proof strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 max-w-3xl">
      <div>
        <div className="text-2xl font-bold text-accent">10k+</div>
        <div className="text-sm text-gray-400">Records analyzed</div>
      </div>

      <div>
        <div className="text-2xl font-bold text-accent">12k+</div>
        <div className="text-sm text-gray-400">Tweets processed</div>
      </div>

      <div>
        <div className="text-2xl font-bold text-accent">3</div>
        <div className="text-sm text-gray-400">Production dashboards</div>
      </div>

      <div>
        <div className="text-2xl font-bold text-accent">2</div>
        <div className="text-sm text-gray-400">Internships</div>
      </div>
    </div>



      <div className="section" style={{ display: "grid", gap: "1.5rem" }}>
        <RoleCard
          title="Data Analyst"
          subtitle="Turning data into decisions"
          path="/data-analyst"
        />
        <RoleCard
          title="Full Stack Developer"
          subtitle="Building reliable web applications"
          path="/full-stack"
        />
        <RoleCard
          title="Product / UX"
          subtitle="Designing usable, human-first interfaces"
          path="/product-ux"
        />
      </div>
    </div>
  );
}

export default Landing;
