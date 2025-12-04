const tcBox = document.getElementById("tcBox");
const check = document.getElementById("aceptarTerminos");
const btn = document.getElementById("btnAceptar");

// Activar checkbox al llegar al final
tcBox.addEventListener("scroll", function() {
  const bottom = tcBox.scrollHeight - tcBox.scrollTop - tcBox.clientHeight;
  if (bottom <= 0) {
    check.disabled = false;
  }
});

// Activar botón al marcar checkbox
check.addEventListener("change", function () {
  btn.disabled = !check.checked;
});

// Registrar datos
function registrarUsuario() {
  const nombre = document.getElementById("nombre").value.trim();
  const organizacion = document.getElementById("organizacion").value.trim();
  const telefono = document.getElementById("telefono").value.trim();

  if (!nombre || !organizacion) {
    alert("Por favor completa: Nombre completo y Organización.");
    return;
  }

  const datos = {
    nombre,
    organizacion,
    telefono: telefono || "No proporcionado",
    fecha: new Date().toISOString()
  };

  localStorage.setItem("registroUsuario", JSON.stringify(datos));

  alert("Datos registrados correctamente.");
}
