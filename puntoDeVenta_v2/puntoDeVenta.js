calcularValorTotal = function () {
    
    let nombreProducto;
    let precioProducto; 
    let cantidad; 
    
    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;
    let existeError = false;

    nombreProducto = recuperarTexto("txtNota1");
    cantidad = recuperarInt("txtNota2");
    precioProducto = recuperarInt("txtNota3");
    
    
    if(esProductoValido(nombreProducto,"lblError1")){
        existeError = true;
    }else if( esCantidadValida(cantidad,"lblError2")){
        existeError = true;
    }else if(esPrecioValido(precioProducto,"lblError3")){
        existeError = true;
    }else{
        esCampoObligatorio(nombreProducto,"lblError1");
        esCampoObligatorio(cantidad,"lblError2");
        esCampoObligatorio(precioProducto,"lblError3");
    }
    
    
    valorSubtotal = clacularSubtotal(precioProducto,cantidad);
    mostrarTexto("lblResultado",valorSubtotal);
    valorDescuento = calcularDescuentoPorVolumen(valorSubtotal,cantidad);
    mostrarTexto("lblResultado1",valorDescuento);
    valorIVA = calcularIva(valorSubtotal - valorDescuento);
    mostrarTexto("lblResultado2",valorIVA);
    valorTotal = calcularTotal(valorSubtotal,valorDescuento,valorIVA);
    mostrarTexto("lblResultado3",valorTotal);


     

    
}
limpiar = function () {
    mostrarTextoEnCaja("txtNota1","");
    mostrarTextoEnCaja("txtNota2","");
    mostrarTextoEnCaja("txtNota3","");
    
    mostrarTexto("lblResultado","0.0");
    mostrarTexto("lblResultado1","0.0");
    mostrarTexto("lblResultado2","0.0");
    mostrarTexto("lblResultado3","0.0");
    


}
esCampoObligatorio = function(error,idComponente){
    let hayErrores = false;
    if(error == ""){
        mostrarTexto(idComponente,"CAMPO OBLIGATORIO");
        hayErrores = true;
    }
    if(isNaN(error)){
        mostrarTexto(idComponente,"CAMPO OBLIGATORIO");
        hayErrores = true;
    }
    if(hayErrores == false){
        mostrarTexto(idComponente,"");
        hayErrores =true;   
    } 
    
    
}     

esProductoValido = function(producto,idComponente){
    let cmpProducto = producto.length;
    let hayErrores = false;
    if(cmpProducto = 0 || cmpProducto > 10){
        mostrarTexto(idComponente,"NO PUEDE TENER MAS DE 10 CARACTERES")
        hayErrores = true;
    }
    if(hayErrores == false){
        mostrarTexto(idComponente,"");
    }
    

}

esCantidadValida = function(cantidad,idComponente){
    
    let hayErrores = false;
    if(cantidad =0 || cantidad > 100){
        mostrarTexto(idComponente,"SOLO MONTOS ENTRE 0 Y 100");
        hayErrores = true;
    }
    if(hayErrores == false){
        mostrarTexto(idComponente,"");   
    } 
    

}
esPrecioValido = function(precio,idComponente){
    let hayErrores = false;
    if(precio = 0 || precio > 50){
        mostrarTexto(idComponente,"SOLO MONTOS ENTRE 0 Y 50");
        hayErrores = true;
    }
    if(hayErrores == false){
        mostrarTexto(idComponente,"");
    }
   

}