document.addEventListener("DOMContentLoaded", () => {
    const botonesAgregar = document.querySelectorAll(".btn-agregar");  //se guardan todas las anclas que encuentra con la clase btn-agregar


    //recorre la lista de nodos (array) y para cada boton queda esperando a que hagan click
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", (event) => {
            event.preventDefault();

            // Obtener datos del producto
            const nombre = boton.getAttribute("data-nombre");
            const precio = boton.getAttribute("data-precio");

            // Obtener el carrito actual de localStorage
            let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

            // Agregar el servicio al carrito
            carrito.push({ nombre, precio });

            // Guardar el carrito actualizando en localStorage
            localStorage.setItem("carrito", JSON.stringify(carrito));

            alert(`${nombre} agregado al carrito.`);
        });
    });
});
