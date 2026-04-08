import PdfButton from "../components/PdfButton";
import BackButton from "../components/BackButton";

function ProductUX() {
  return (
    <div className="container">
      <BackButton />

      <h1>Product / UX</h1>
      <PdfButton file="/resume/diwakar-product-ux.pdf" />

      <p className="section">
        Product-focused designer with a strong engineering background,
        creating intuitive and usable interfaces grounded in real user needs.
      </p>

      <div className="section">
        <h3>Skills</h3>
        <p>User Research, UX Design, Wireframing, Product Thinking</p>
      </div>

      <div className="section">
        <h3>Tools</h3>
        <p>Figma, Whimsical, Notion</p>
      </div>

      <div className="section">
        <h3>Case Studies</h3>
        <ul>
          <li>Resume Experience Optimization</li>
          <li>Student Job Portal UX Redesign</li>
        </ul>
      </div>
    </div>
  );
}

export default ProductUX;
