const tcBox = document.getElementById("tcBox");
const check = document.getElementById("aceptarTerminos");
const btn = document.getElementById("btnAceptar");

// Activar checkbox al llegar al final del scroll
tcBox.addEventListener("scroll", () => {
  const bottom = tcBox.scrollHeight - tcBox.scrollTop - tcBox.clientHeight;
  if (bottom <= 0) check.disabled = false;
});

// Activar botón al marcar checkbox
check.addEventListener("change", () => {
  btn.disabled = !check.checked;
});

// Registrar usuario y enviar a Google Sheets
async function registrarUsuario() {
  const nombre = document.getElementById("nombre").value.trim();
  const organizacion = document.getElementById("organizacion").value.trim();
  const telefono = document.getElementById("telefono").value.trim();

  if (!nombre || !organizacion) {
    alert("Por favor completa los campos obligatorios.");
    return;
  }

  const payload = {
    nombre,
    organizacion,
    telefono: telefono || "No proporcionado",
  };

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzP1MDbrH6Q8_FO1B0BHj5Sti_Zgq1rjeR8dlAdTruaUm3oJrrOaKIZYH81_0EiOcav8Q/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    await response.text();
    alert("Has aceptado los términos y condiciones. ¡Registro completado!");
  } catch (error) {
    console.error(error);
    alert("Ocurrió un error al registrar los datos.");
  }
}
