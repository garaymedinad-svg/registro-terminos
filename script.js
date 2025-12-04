const tcBox = document.getElementById("tcBox");
const check = document.getElementById("aceptarTerminos");
const btn = document.getElementById("btnAceptar");

// 1. Activar checkbox al llegar al final del scroll
tcBox.addEventListener("scroll", function () {
  const bottom = tcBox.scrollHeight - tcBox.scrollTop - tcBox.clientHeight;
  if (bottom <= 0) {
    check.disabled = false;
  }
});

// 2. Activar botón al marcar checkbox
check.addEventListener("change", function () {
  btn.disabled = !check.checked;
});

// 3. Registrar usuario y enviar a Google Sheets
function registrarUsuario() {
  const nombre = document.getElementById("nombre").value.trim();
  const organizacion = document.getElementById("organizacion").value.trim();
  const telefono = document.getElementById("telefono").value.trim();

  // Validar campos obligatorios
  if (!nombre || !organizacion) {
    alert("Por favor completa Nombre y Organización.");
    return;
  }

  const payload = {
    nombre,
    organizacion,
    telefono: telefono || "No proporcionado",
  };

  fetch("https://script.google.com/macros/s/AKfycbxnc36okaAvJSvWBGRXxCqFJuuWfQsr0FI7_n0mp03snXbmKBtPG8FUvzCPT40ctyVpag/exec", {
    method: "POST",
    body: JSON.stringify(payload),
  })
    .then((response) => response.text())
    .then(() => {
      alert("Datos registrados correctamente.");
    })
    .catch((error) => {
      alert("Error al enviar los datos.");
      console.log(error);
    });
}

