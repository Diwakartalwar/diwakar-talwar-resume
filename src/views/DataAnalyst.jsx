import PdfButton from "../components/PdfButton";
import BackButton from "../components/BackButton";

function DataAnalyst() {
  return (
    <div className="container">
      <BackButton />

      <h1>Data Analyst</h1>
      <PdfButton file="/resume/diwakar-data-analyst.pdf" />

      <p className="section">
        Data analyst experienced in SQL, Power BI, and Python, focused on
        transforming raw data into clear dashboards and actionable insights.
      </p>

      <div className="section">
        <h3>Skills</h3>
        <p>SQL, Power BI, Excel, Python, DAX</p>
      </div>

      <div className="section">
        <h3>Tools</h3>
        <p>Power BI, Excel, PostgreSQL, Jupyter Notebook</p>
      </div>

      <div className="section">
        <h3>Key Projects</h3>
        <ul>
          <li>Sales Performance Dashboard (Power BI)</li>
          <li>User Retention Cohort Analysis</li>
          <li>Social Media Engagement Analysis</li>
        </ul>
      </div>
    </div>
  );
}

export default DataAnalyst;
