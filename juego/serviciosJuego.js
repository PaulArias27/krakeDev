obtenerAleatorio = function(){
    let aleatorio = Math.random();
    let rango = 3;
    let escalado = aleatorio * rango;
    let entero = parseInt(escalado);
    let minimo = 1;
    let resultado = entero + minimo;
    return resultado;
}
generarElemento = function(){
    let numeroAleatorio = obtenerAleatorio();
    let elemento ;
    if(numeroAleatorio == 1){
        elemento = "piedra";
            
    }else if(numeroAleatorio == 2){
        elemento = "papel";
        
    }else if(numeroAleatorio == 3){
        elemento = "tigera";
        
    }else{
        elemento = "ERROR";
    }
    return elemento;
}
determinarGanador = function(eleccionJugador1,eleccionJugador2){
    if(eleccionJugador1 === eleccionJugador2){
        return 0;
    }
    if(eleccionJugador1 === "piedra" && eleccionJugador2 === "tigera"){
        return 1;
    }
    if(eleccionJugador1 === "papel" && eleccionJugador2 === "piedra"){
        return 1;
    }
    if(eleccionJugador1 === "tigera" && eleccionJugador2 === "papel"){
        return 1;
    }
    return 2;
}
generarRuta = function(nombre){
    let rutaCompleta = "img/" + nombre + ".jpeg";
    return rutaCompleta;
}