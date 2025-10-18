calacularTasaInteres = function(ingresoAnual){
    let cmpTasa;
    cmpTasa = document.getElementById("tasa");
    let tasa = cmpTasa.value;
    ingresoAnual  = parseFloat(tasa);
    if(ingresoAnual < 300000){
        mostrarTexto("lblRespuesta","la tasa es del 16%");
    }else if(ingresoAnual >= 300000 && ingresoAnual < 500000){
        mostrarTexto("lblRespuesta","la tasa es del 15%");
    }else if(ingresoAnual >= 500000 && ingresoAnual < 1000000){
        mostrarTexto("lblRespuesta","la tasa es del 14%");
    }else if(ingresoAnual >= 1000000 && ingresoAnual < 2000000){
        mostrarTexto("lblRespuesta","la tasa es del 13%");
    }else if(ingresoAnual >= 2000000){
        mostrarTexto("lblRespuesta","la tasa es del 12%");
    }    
}
calcularCapacidadPago = function(edad,ingresos,egresos){
    let cmpEdad = document.getElementById("capacidadPago");
    let lblEdad = cmpEdad.value;
    edad = parseInt(lblEdad);
    let cmpIngreso = document.getElementById("ingresos");
    let lblIngresos = cmpIngreso.value;
    ingresos = parseFloat(lblIngresos);
    let cmpEgresos = document.getElementById("egresos");
    let lblEgresos = cmpEgresos.value;
    egresos = parseFloat(lblEgresos);

    let cmpResta;
    cmpResta = ingresos - egresos;
    
    if(edad > 50){
        let resta = cmpResta * 30/100;
        mostrarTexto("lblCapacidad","su capacidad es: " + resta);
    }else if(edad <=50){
        let resta = cmpResta * 40/100;
        mostrarTexto("lblCapacidad","su capacidad es: " + resta);
    }
}
calcularDescuento = function(precio,cantidad){
    let cmpPrecio = document.getElementById("precio");
    let lblPrecio = cmpPrecio.value;
    precio = parseFloat(lblPrecio);
    let cmpCantidad = document.getElementById("cantidad");
    let lblCantidad = cmpCantidad.value;
    cantidad = parseInt(lblCantidad);

    let cmpSuma = precio * cantidad;

    if(cantidad < 3){
        mostrarTexto("valorPagar","no recibe descuento: " + cmpSuma);
    }else if(cantidad >= 3 || cantidad <= 5){
        let descuento = cmpSuma * 2/100;
        let resta = cmpSuma - descuento;
        mostrarTexto("valorPagar","su valor con descuento es: " + resta);
    }else if(cantidad >= 6 || cantidad <= 11){
        let descuento = cmpSuma * 3/100;
        let resta = cmpSuma - descuento;
        mostrarTexto("valorPagar","su valor con descuento es: " + resta);
    }else if(cantidad >= 12){
        let descuento = cmpSuma * 4/100;
        let resta = cmpSuma - descuento;
        mostrarTexto("valorPagar","su valor con descuento es: " + resta);
    }
}
determinarColesterolLDL = function(nivelColesterol){
    let cmpColesterol = document.getElementById("colesterol");
    let lblColesterol = cmpColesterol.value;
    nivelColesterol = parseFloat(lblColesterol);
    if(nivelColesterol <= 100){
        mostrarTexto("valorColesterol","su nivel de colesterol LDL es malo con " + nivelColesterol + " mg/dl");
    }else if(nivelColesterol > 100 || nivelColesterol <= 200 ){
        mostrarTexto("valorColesterol", "su nivel de colestrol esta en un rango moderado");
    }
}
validarClave = function(clave){
    let cmpClave = document.getElementById("contraseña");
    let lblClave = cmpClave.value;
    clave = lblClave.length;
    if(clave >= 8 && clave <= 16){
        return true;
        
    }else {
        return false;        
    }
}
esMayuscula = function(caracter){
    caracter = "P";
    let valorCodigo = caracter.charCodeAt(0);
    if(valorCodigo == 80){        
        return true;
    }else{      
        return false;
    }
}
esMinuscula = function(caracter){
    caracter = "sí"
    let valorCodigo = caracter.charCodeAt(1);
    if(valorCodigo >= 97 || valorCodigo <= 122){
        return true;
    }else if(valorCodigo >= 160 || valorCodigo <=163){
        return true;
    }else {
        return false;
    }
}
esDigito = function(caracter){
    caracter = "1";
    let valorCodigo = caracter.charCodeAt(0);
    if(valorCodigo >= 48 || valorCodigo <=57){
        return true;
    }else{
        return false;
    }
}
darPermiso = function(notaMatematica,notaFisica,notaGeometria){
    let cmpMatematicas = document.getElementById("matematicas");
    let lblMatematicas = cmpMatematicas.value;
    notaMatematica = parseFloat(lblMatematicas);
    let cmpFisica = document.getElementById("fisica");
    let lblFisica = cmpFisica.value;
    notaFisica = parseFloat(lblFisica);
    let cmpGeometria = document.getElementById("geometria");
    let lblGeometria = cmpGeometria.value;
    notaGeometria = parseFloat(lblGeometria);
    if(notaMatematica > 90){
        console.log("tiene permiso");
        return true;
    }else if(notaFisica > 90){
        console.log("tiene permiso");
        return true;
    }else if(notaGeometria >90){
        console.log("tiene permiso");
        return true;
    }else {
        console.log("no tiene permiso");
        return false;
    }
}
otorgarPermiso = function(notaMatematica,notaFisica,notaGeometria){
    let cmpMatematicas = document.getElementById("matematicas");
    let lblMatematicas = cmpMatematicas.value;
    notaMatematica = parseFloat(lblMatematicas);
    let cmpFisica = document.getElementById("fisica");
    let lblFisica = cmpFisica.value;
    notaFisica = parseFloat(lblFisica);
    let cmpGeometria = document.getElementById("geometria");
    let lblGeometria = cmpGeometria.value;
    notaGeometria = parseFloat(lblGeometria);
    if(notaMatematica > 90 && notaGeometria > 80){
        console.log("tiene permiso");
        return true;
    }else if(notaFisica > 90 && notaGeometria > 80){
        console.log("tiene permiso");
        return true;
    }else {
        console.log("no tiene permiso");
        return false;
    }
}
dejarSalir = function(notaMatematica,notaFisica,notaGeometria){
    let cmpMatematicas = document.getElementById("matematicas");
    let lblMatematicas = cmpMatematicas.value;
    notaMatematica = parseFloat(lblMatematicas);
    let cmpFisica = document.getElementById("fisica");
    let lblFisica = cmpFisica.value;
    notaFisica = parseFloat(lblFisica);
    let cmpGeometria = document.getElementById("geometria");
    let lblGeometria = cmpGeometria.value;
    notaGeometria = parseFloat(lblGeometria);
    if(notaMatematica > 90 && notaFisica > notaMatematica){
        console.log("tiene permiso");
        return true;
    }else if(notaGeometria > 90){
        console.log("tiene permiso");
        return true;
    }else {
        console.log("no tiene permiso");
        return false;
    }
}