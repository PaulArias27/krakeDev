jugar = function (){
    let aleatorio;

    aleatorio = lanzarDado();
    cambiarTexto("lblNumero",aleatorio);
    if(aleatorio >3){
        cambiarTexto("lblNumero","GANASTE!!");
    }else{
        cambiarTexto("lblNumero","PERDISTE!!");
    }

}
//crear una funcion llamada lanzarDado
//no recibe parametros
//retorna un aleatorio entre 1 y 6
lanzarDado = function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado;
    aleatorio = Math.random(); //entre 0 y 1
    numeroMultiplicado = aleatorio * 6;
    
    numeroEntero = parseInt(numeroMultiplicado); //entre 0 y 5
    
    valorDado = numeroEntero + 1;// entre 0 y 6
    return valorDado;
}