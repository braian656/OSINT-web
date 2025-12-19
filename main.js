const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const params = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    message: document.getElementById("message").value.trim(),
  };

  if (!params.name || !params.email || !params.message) {
    status.textContent = "Por favor completá todos los campos.";
    status.style.color = "red";
    return;
  }

  emailjs
    .send("TU_SERVICE_ID", "TU_TEMPLATE_ID", params)
    .then(() => {
      status.textContent = "Mensaje enviado correctamente. Te contactaré pronto.";
      status.style.color = "#38bdf8";
      form.reset();
    })
    .catch(() => {
      status.textContent = "Error al enviar el mensaje. Intentá más tarde.";
      status.style.color = "red";
    });
});
