//precio 400000

const precioInicial = document.querySelector(".precio-inicial");
const cantidad = document.querySelector(".cantidad");
const valorTotal = document.querySelector(".valor-total");

precioInicial.innerHTML = "400000";
cantidad.innerHTML = "0";
valorTotal.innerHTML = "0";

const botonMas = document.querySelector(".card button:first-of-type");
const botonMenos = document.querySelector(".card button:last-of-type");

botonMas.addEventListener("click", function() {
  const nuevaCantidad = parseInt(cantidad.innerHTML) + 1;

  if (nuevaCantidad <= 5) {
    cantidad.innerHTML = nuevaCantidad;
    const nuevoValorTotal = nuevaCantidad * parseInt(precioInicial.innerHTML);
    valorTotal.innerHTML = nuevoValorTotal;
  } else {
    alert("No hay más stock disponible.");
  }

  actualizarEstadoBoton();
});

botonMenos.addEventListener("click", function() {
  cantidad.innerHTML = Math.max(parseInt(cantidad.innerHTML) - 1, 0);
  const nuevoValorTotal = parseInt(cantidad.innerHTML) * parseInt(precioInicial.innerHTML);
  valorTotal.innerHTML = nuevoValorTotal;


  actualizarEstadoBoton();
});

function actualizarEstadoBoton() {
  const nuevaCantidad = parseInt(cantidad.innerHTML);
  botonMas.disabled = nuevaCantidad >= 5;
}