//Este proyecto esta pensado en la cantidad de personas de todo el mundo, que en el ultimo tiempo, han buscado la manera de compartir con el resto de usuarios de las distintas redes sociales, la forma de mostrarles sus viajes, la variedad de paisajes y sus experiencias. En donde de distintas maneras han tratado de dejar sus consejos y las diversas actividades que pueden realizar en los distintos puntos del planeta.

//En este espacio los usuarios van a poder subir fotos de sus viajes, y dejar sus opiniones, consejos y recomendaciones, para que otros viajantes puedan tener un panorama abierto de todo lo que deben y no deben hacer en su recorrido!! BUEN VIAJE 


function datosUsuario(){
let continuar = true;
  
while (continuar){

let usuario = prompt("Bienvenid@!! Ingrese nombre y apellido para seguir los pasos, o escriba ''NO'' (en mayúscula) para continuar");
  
    if (usuario === "NO"){
        alert("Ha elegido continuar sin ingresar sus datos. ¡Hasta luego!");
        continuar = false; 
    } 
      
    else{
        let edad = prompt("Hola " + usuario + " Ingrese su edad: ");
  
    if (edad >= 13 && edad <= 17){
        alert("USTED ES MENOR DE EDAD PARA VIAJAR SOL@, Recuerde que para viajar debe contar con autorización firmada de sus padres / tutor(es)");
        console.log("El usuario: " + usuario + " es menor de edad, debe contar con autorización firmada");
    } 

    else if (edad >= 1 && edad <= 12){
        alert("SI USTED DESEA VIAJAR, DEBE ESTAR ACOMPAÑADO POR UN MAYOR RESPONSABLE (EXCLUYENTE)");
        console.log("El usuario " + usuario + " no puede viajar sin acompañante");
    } 
    
    else{
        alert("Disfrute su estadía en nuestra página, Buena Suerte");
        console.log("El usuario " + usuario + " no presenta restricciones");
    }
  
// Opciones de navegación

let opcion = prompt("Elija una opción:\n1: Ver experiencias\n2: realizar consulta personalizada\n3: Salir");
  
    switch (opcion){
        case '1':
        alert("AQUÍ PODRÁ VER LAS EXPERIENCIAS DE MILES DE VIAJANTES");
        console.log("Ver experiencias de otros viajeros");
        continuar = false; // Cambiar el valor para salir del bucle
        break;

        case '2':
        alert("USTED DESEA HACER UNA CONSULTA PERSONALIZADA");
        console.log("Desea tener información personalizada");
        continuar = false; // Cambiar el valor para salir del bucle
        break;

        case '3':
        alert("USTED DESEA NAVEGAR POR NUESTRA PÁGINA SIN AYUDA");
        console.log("No solicita ayuda");
        continuar = false; // Cambiar el valor para salir del bucle
        break;

        default:
        alert("Opción no válida. Por favor recargue la página y elija una opción válida.");
    }
    }
}
}
  
datosUsuario();
  





























