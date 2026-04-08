import PdfButton from "../components/PdfButton";
import BackButton from "../components/BackButton";

function FullStack() {
  return (
    <div className="container">
      <BackButton />

      <h1>Full Stack Developer</h1>
      <PdfButton file="/resume/diwakar-full-stack.pdf" />

      <p className="section">
        Full stack developer building scalable web applications using modern
        frontend frameworks and backend APIs.
      </p>

      <div className="section">
        <h3>Skills</h3>
        <p>JavaScript, React, Node.js, REST APIs</p>
      </div>

      <div className="section">
        <h3>Tools</h3>
        <p>React, Vite, Express, Git, PostgreSQL</p>
      </div>

      <div className="section">
        <h3>Key Projects</h3>
        <ul>
          <li>Interactive Resume Website</li>
          <li>Job & Internship Listing Platform</li>
          <li>AI-Integrated Web Application</li>
        </ul>
      </div>
    </div>
  );
}

export default FullStack;
