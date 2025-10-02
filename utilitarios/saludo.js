saludar = function(){
    let nombre;
    nombre = recuperarTexto("txtNombre");
    //recuperar el valor de la caja txtapellido:
    let apellido = recuperarTexto("txtApellido");

    let edad = recuperarInt("txtEdad");

    let estatura = recuperarFloat("txtEstatura");

    let mensajeBienvenida = "Bienvenido "+ nombre +" "+ apellido; 

    mostrarTexto("lblResultado",mensajeBienvenida);

    mostrarImagen("imgSaludo","./imagenes/source.gif");

    mostrarTextoEnCaja("txtNombre","");

}
