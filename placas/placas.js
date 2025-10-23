validarPlaca = function(){
    let placa = recuperarTexto("txtPlaca");
    let erroresEstructura = validarEstructura(placa);
    if(erroresEstructura == null){
        mostrarTexto("validacion","ESTRUCTURA VALIDA");
        
    }else{
        mostrarTexto("validacion","ESTRUCTURA INCORRECTA");
        mostrarTexto("errores",erroresEstructura);
    }
    let cmpPLaca = recuperarTexto("txtPlaca");
    let provincia = obtenerProvincia(cmpPLaca);
    if(provincia !== null){
        mostrarTexto("provincia",provincia);
    }else{
        mostrarTexto("provincia","PROVINCIA INCORRECTA");
    }
    let tipoVehiculo = recuperarTexto("txtPlaca");
    let tipos = obtenerTipoVehiculo(tipoVehiculo);
    if(tipos !== null){
        mostrarTexto("tiposVehiculo",tipos);
    }else{
        mostrarTexto("tiposVehiculo","NO EXISTE");
    }
    let diaPlaca = recuperarTexto("txtPlaca");
    let picoYplaca = obtenerDiaPicoYPlaca(diaPlaca);
    if(picoYplaca !== null){
        mostrarTexto("picoPlaca","DIA PICO Y PLACA: " + picoYplaca);
    }else{
        mostrarTexto("picoPlaca","NO CONSTA EN EL SISTEMA");
    }

    
}
limpiar = function(){
    mostrarTextoEnCaja("txtPlaca","");
    mostrarTexto("validacion","");
    mostrarTexto("provincia","");
    mostrarTexto("tiposVehiculo","");
    mostrarTexto("picoPlaca","");
    mostrarTexto("errores","");

}