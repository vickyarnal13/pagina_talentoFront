const formulario= document.getElementById("miFormulario");
console.log(formulario);

formulario.addEventListener("submit", event => {
    //prevenir el envío del formulario
    event.preventDefault();

    //obtener los valores de los campos

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    
    console.log(nombre);
    console.log(email);
    console.log(mensaje);


    //variables para los mensajes de error

    const errorNombre = document.getElementById("errorNombre");
    const errorEmail = document.getElementById("errorEmail");
    const errorMensaje = document.getElementById("errorMensaje");

    //inicializar validación

    let formularioValido = true;

    //validar nombre

    if(nombre ===""){
        errorNombre.classList.remove("d-none");
        formularioValido = false;
    } else {
        errorNombre.classList.add("d-none");
    }


    //validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)) {
        errorEmail.classList.remove("d-none");
        formularioValido = false;
    } else {
        errorEmail.classList.add("d-none");
    }

    //validar mensaje
    if(mensaje.length < 10){
        errorMensaje.classList.remove("d-none");
        formularioValido = false;
    } else {
        errorMensaje.classList.add("d-none");
    }

    //si el formulario es válido, se puede enviar

    if(formularioValido){
        alert("Formulario enviado correctamente");
    }

});