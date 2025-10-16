let puntos;
puntos = 0;
let lanzamientos;
lanzamientos = 5;

jugar=function(){
    let resultado;
    resultado=lanzarDado();
    console.log(resultado);
    mostrarCara(resultado);
    modificarPuntos(resultado);
    modificarLanzamientos();
   
}
modificarPuntos = function(numero){
    puntos = puntos + numero;
    cambiarTexto("lblPuntos",puntos);
    //si el jugador obtiene mas de 20 puntos
    //mostrar en panatalla un mensaje ganaste
    //colocar puntage en 0 y lanzamiento en 5
    if(puntos >= 20){
        cambiarTexto("resultado","GANASTE !!");
        limpiar();
    }
}
//no recibe parametros 
//resta 1 a la variable lanzamientos,guarda el resultado en la misma variable
//muestra en pantalla
modificarLanzamientos = function(){
    lanzamientos = lanzamientos - 1;
    cambiarTexto("lblLanzamientos",lanzamientos);
    //si lanzamientos llega a 0 mostrar el mensaje "game over"
    //invoca a limpiar
    if(lanzamientos ==0){
        cambiarTexto("resultado","GAME OVER !!");
        limpiar();
    }
}

limpiar = function(){
    //en las variables y en pantalla
    //quitar la imagen 
    puntos = 0;
    cambiarTexto("lblPuntos",puntos);
    lanzamientos = 5;
    cambiarTexto("lblLanzamientos",lanzamientos);
    cambiarImagen("imgDado", " ");
    

}
//funcion mostrar cara,recibe el numero que quiere mostrar
//muestra la imagen correspondiente al numero que recibe
//no retorna nada
mostrarCara = function(numero){
    if(numero ==1){
        cambiarImagen("imgDado","dados1.png");
    }else if (numero ==2){
        cambiarImagen("imgDado","dados2.png");
    }else if(numero == 3){
        cambiarImagen("imgDado","dados3.png");
    }else if(numero ==4){
        cambiarImagen("imgDado","dados4.png");
    }else if(numero ==5){
        cambiarImagen("imgDado","dados5.png");
    }else if(numero == 6){
        cambiarImagen("imgDado","dados6.png");
    }
}



lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}