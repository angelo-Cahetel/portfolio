function baixarCV() {
  const link = document.createElement("a");
  link.href = "../../public/cv-AngeloMendes-2026.pdf";
  link.download = "cv-AngeloMendes-2026.pdf";
  link.click();
}

export default baixarCV;
