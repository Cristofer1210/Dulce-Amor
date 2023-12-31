/*crear una funcion con un alert de bienvenida al usuario a nuestra pagina*/
const saludar = () => {
    const hoy = new Date();
    let horaActual = hoy.getHours();  // Obtener la hora actual del sistema
    if (horaActual >= 0 && horaActual < 12) {
        console.log('Buenos días, bienvenido a nuestra página');
        alert('Buenos días, bienvenido a nuestra página');
        } else if (horaActual >= 12 && horaActual < 18) {
            console.log('Buenas tardes, bienvenido a nuestra página');
            alert('Buenas tardes, bienvenido a nuestra página');
            } else {
                console.log('Buenas noches, bienvenido a nuestra página');
                alert('Buenas noches, bienvenido a nuestra página')
                }
                };
                //Llamada a la función para que ejecute el código dentro de ella
                saludar();

function daleMeGusta(){
    // Comprobar si el elemento `<button>` existe
    var boton = document.querySelector("button");
        if (boton){
        // Ejecutar la función normalmente
        var nombre = prompt("¿Cómo te llamas?");
            if (nombre == null || nombre == ""){
                alert("Por favor ingresa un nombre válido");
            }else {
                alert("¡Muchas gracias por norificarnos que le gusta nuestra página " + nombre + "!");
            };
            }else{
                // No hacer nada
            };
}

function noMeGusta(){
    // Comprobar si el elemento `<button>` existe
    var boton = document.querySelector("button");
        if (boton){
        // Ejecutar la función normalmente
        var nombre = prompt("¿Cómo te llamas?");
            if (nombre == null || nombre == ""){
                alert("Por favor ingresa un nombre válido");
            }else {
                alert("¡Muchas gracias por notificarnos, mejoraremos para darte la mejor experiencia " + nombre + "!");
            };
            }else{
                // No hacer nada
            };
}

/*crear una funcion para que se lo envie al usuario a la pagina inicial de html*/
function volverInicio() {
    window.location="Dulce-Amor.html";
}