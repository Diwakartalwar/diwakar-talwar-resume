function PdfButton({ file }) {
  return (
    <a href={file} download>
      <button style={{ marginBottom: "1.5rem" }}>
        Download PDF
      </button>
    </a>
  );
}

export default PdfButton;
