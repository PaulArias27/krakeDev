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
buscarLetra = function(cadena,letra){
    let letraInterada;
    let existeLetra = false;
    for(let i = 0;i < cadena.length;i++){
        letraInterada = cadena.charAt(i);
        if(letraInterada == letra){
            existeLetra = true;
        }
    }
    if(existeLetra == true){
        return true;
    }else{
        return false;
    }

}
contarMayusculas = function(cadena){
    let letra;
    let contadorMayusculas;
    for (let i = 0;i < cadena.length;i++){
        letra = cadena.charAt(i);
        if(esMayuscula(letra)){
            contadorMayusculas ++;
        }

    }
    console.log(contadorMayusculas);

}