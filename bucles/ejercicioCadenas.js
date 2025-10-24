ejecutarPrueba1 = function(){
    let mensaje;
    mensaje = recuperarTexto("txtCadena")
    recorrerCadena(mensaje);
}
recorrerCadena = function(cadena){
    //0123
    //juan
    let caracter;
    for(let posicion = 0;posicion < cadena.length;posicion++){
        caracter = cadena.charAt(posicion);
        console.log("caracter "+ caracter + "posicion "+posicion);

    }
    for(let posicion = 0;posicion <= cadena.length -1;posicion++){
        caracter = cadena.charAt(posicion);
        console.log("CARACTER "+ caracter + "POSICION "+posicion);

    }
}
ejecutarPrueba2 = function(){
    let mensaje;
    mensaje = recuperarTexto("txtCadena")
    let pantalla = invertirCadena(mensaje);
    mostrarTexto("txtPantalla",pantalla);
}


invertirCadena = function(cadena){
    let resultado ="";
    for( let posicion = cadena.length -1;posicion >= 0;posicion--){
        let letra = cadena.charAt(posicion);
        resultado = resultado + letra;

    }
    return resultado;

}