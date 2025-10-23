let puntosUsuarios = 0;
let puntosComputador = 0;
jugar =function(seleccionado){
    let elementoComputador = generarElemento();
    let ruta =generarRuta(elementoComputador);
    mostrarImagen("imgComputador",ruta);

    let resultado = determinarGanador(seleccionado,elementoComputador)
   
    if(resultado === 0){
        mostrarTexto("ganador","EMPATE");
    }else if(resultado === 1){
        mostrarTexto("ganador","GANASTE LA PARTIDA");
        puntosUsuarios = +1;
        mostrarTexto("puntosUsuario",puntosUsuarios);
    }else{
        mostrarTexto("ganador","PERDISTE LA PARTIDA");
        puntosComputador = +1;
        mostrarTexto("puntosComputador",puntosComputador);
    }
}