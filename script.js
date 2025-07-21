function iniciarSesion(event) {
  event.preventDefault();
  const usuario = document.getElementById("usuario").value;
  const contrasena = document.getElementById("contrasena").value;
  if (usuario === "admin" && contrasena === "123") {
    document.getElementById("loginBox").style.display = "none";
    document.querySelector(".sidebar").style.display = "flex";
    document.querySelector(".main").style.display = "block";
  } else {
    alert("Credenciales incorrectas");
  }
}

function cerrarSesion() {
  document.getElementById("loginBox").style.display = "flex";
  document.querySelector(".sidebar").style.display = "none";
  document.querySelector(".main").style.display = "none";
  document.getElementById("usuario").value = "";
  document.getElementById("contrasena").value = "";
}

function mostrar(event, id) {
  event.preventDefault();
  document.querySelectorAll('.seccion').forEach(sec => sec.style.display = 'none');
  document.getElementById(id).style.display = 'block';
  document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
  event.target.closest('a').classList.add('active');
}

function agregarProducto(e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const cantidad = document.getElementById('cantidad').value;
  const estado = document.getElementById('estado').value;
  const fila = `<tr><td>${nombre}</td><td>${cantidad}</td><td>${estado}</td></tr>`;
  document.getElementById('tabla-productos').innerHTML += fila;
  e.target.reset();
}

function filtrarVentas() {
  const filtroDia = document.getElementById('filtroDia').value;
  document.querySelectorAll('.venta').forEach(venta => {
    const fecha = venta.dataset.fecha;
    venta.style.display = (!filtroDia || filtroDia === fecha) ? 'block' : 'none';
  });
}
