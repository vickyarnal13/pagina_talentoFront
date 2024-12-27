document.addEventListener("DOMContentLoaded", () => {
    const tablaCarrito = document.getElementById("tablaCarrito"); // Referencia a la tabla en el DOM
    const totalCarrito = document.getElementById("totalCarrito");

    // Obtener carrito del localStorage, y si no existe nos da un array vacío
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    // Función para renderizar el carrito
    const renderizarCarrito = () => {
        // Limpiar tabla y dejar vacía
        tablaCarrito.innerHTML = "";

        if (carrito.length === 0) {
            // Mostrar mensaje de carrito vacío
            tablaCarrito.innerHTML = "<tr><td colspan='3'>El carrito está vacío.</td></tr>";
            totalCarrito.innerHTML = "0.00";
            return;
        }

        // Renderizar productos en la tabla
        carrito.forEach((producto, index) => {
            const fila = document.createElement("tr"); // Crear fila de tabla
            fila.innerHTML = `
                <td>${producto.nombre}</td>
                <td>${producto.precio}</td>
                <td>
                    <button class="btn btn-danger btn-sm" data-index="${index}">Eliminar</button>
                </td>
            `;
            tablaCarrito.appendChild(fila); // Agregar fila a la tabla
        });

        // Actualizar el total
        calcularTotal();
    };

    // Función para calcular el total del carrito
    const calcularTotal = () => {
        // Reducir el array para calcular el total
        const total = carrito.reduce((suma, producto) => suma + parseFloat(producto.precio), 0);
        totalCarrito.innerHTML = total.toFixed(2); // Mostrar total con dos decimales
    };

    // Escuchar clics en la tabla para eliminar productos
    tablaCarrito.addEventListener("click", (event) => {
        if (event.target.classList.contains("btn-danger")) {
            const index = event.target.getAttribute("data-index"); // Obtener índice del botón
            carrito.splice(index, 1); // Eliminar producto del carrito
            alert(`Servicio eliminado correctamente`);

            // Actualizar localStorage y tabla
            localStorage.setItem("carrito", JSON.stringify(carrito));
            renderizarCarrito();
        }
    });

    // Inicializar la tabla del carrito al cargar la página
    renderizarCarrito();
});
