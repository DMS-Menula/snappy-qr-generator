const qrImg = document.getElementById("qrImage");
const qrText = document.getElementById("qrText");
const qrSize = document.getElementById("sizeSelect");
const qrColor = document.getElementById("colorPicker");
const downloadBtn = document.getElementById("downloadBtn");
const copyBtn = document.getElementById("copyBtn");

document.getElementById("generateBtn").addEventListener("click", generateQR);

async function generateQR() {
  const text = qrText.value.trim();
  const size = qrSize.value;
  const color = qrColor.value.substring(1);

  if (!text) {
    alert("Please enter some text!");
    return;
  }

  const url = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&color=${color}&data=${encodeURIComponent(
    text
  )}`;

  qrImg.src = url;
  qrImg.style.display = "block";
  downloadBtn.classList.remove("d-none");
  copyBtn.classList.remove("d-none");
  downloadBtn.href = url;
}

// Copy
copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(qrImg.src);
  copyBtn.innerHTML = "✅ Copied!";
  setTimeout(
    () => (copyBtn.innerHTML = `<i class='bi bi-clipboard'></i> Copy Link`),
    1500
  );
});

// Dark Mode Toggle
document.getElementById("darkModeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
