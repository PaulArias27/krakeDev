let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"2000122727",nombre:"Valeria",apellido:"Armijos",sueldo:900.0}
]
let esNuevo = false;

let roles = [];

// valor total
mostrarTotales = function(){
    let totalEmpleado = 0;
    
    let totalEmpleador = 0;
    
    let totalAPagar = 0;
    
    let totalNomina = 0;

    for( let i=0 ; i<roles.length;i++){
        let valor = roles[i];
        totalEmpleado += valor.aporteEmpleado;
        totalEmpleador += valor.aporteEmpleador;
        totalAPagar += valor.valorAPagar;
    }
    mostrarTexto("infoTotalPago",totalAPagar);
    mostrarTexto("infoAporteEmpresa",totalEmpleador);
    mostrarTexto("infoAporteEmpleado",totalEmpleado);

    totalNomina = totalEmpleado + totalEmpleador + totalAPagar;
    mostrarTexto("totales",totalNomina);


}

//rol de pago 

buscarPorRol = function(){
    let buscarRol = recuperarTexto("txtBusquedaCedulaRol");
     let empleado = buscarEmpleado(buscarRol);
    if(empleado != null){
        mostrarTexto("infoCedula",empleado.cedula);
        mostrarTexto("infoSueldo",empleado.sueldo);
        mostrarTexto("infoNombre",empleado.nombre +""+empleado.apellido);
    }else{
        alert("EL EMPLEADO NO EXISTE");
    }

}
 calcularAporteEmpleado = function(sueldo){
    let valorAporte = sueldo * 9.45/100;
    return valorAporte;
 }
 calcularValorAPagar = function(sueldo,iess,descuento){
    let valorAPagar = sueldo - iess - descuento;
    return valorAPagar;

 }
 clacularRol = function(){
    let sueldo = recuperarTextoDiv("infoSueldo");
    let cmpSueldo = parseInt(sueldo);
    let descuento = recuperarTexto("txtDescuentos");
    let descuentoFloat = parseFloat(descuento);
    if(descuentoFloat <= 0 || isNaN(cmpSueldo)){
        alert("DEBE BUSCAR PRIMERO UN EMPLEADO VALIDO ANTES DE GENERAR UN ROL");
        return ;
    }
    let calculoAporte = calcularAporteEmpleado(cmpSueldo);
    mostrarTexto ("infoIESS",calculoAporte);
    let cmpValorAPago = calcularValorAPagar(cmpSueldo,calculoAporte,descuentoFloat);
    mostrarTexto("infoPago",cmpValorAPago);
    habilitarComponente("botonGuardar");
 }
 buscarRol = function(cedula){
    for(let i = 0; i < roles.length; i++){
        let rolActual = roles[i];
        if (rolActual.cedula === cedula ){
            return rolActual;
        }else{
            return null;
        }
    }   
 }

 agregarRol = function(rol){
    let rolExistente = buscarRol(rol.cedula);
    if(rolExistente == rol.cedula){
        alert("ERROR !! ,YA EXISTE UN ROL CON LA CEDULA " + rol.cedula);
    }else{
        roles.push(rol);
        alert("ROL AGREGADO CORRECTAMENTE CON CEDULA "+  rol.cedula);
    }
 }

 calcularAporteEmpleador = function(sueldo){
    let valorAporteEmpleador = sueldo * 11.15/100;
    return valorAporteEmpleador;
 }
 guardarRol = function(){
    let montoAPagar = recuperarTextoDiv("infoPago");
    let montoAporte = recuperarTextoDiv("infoIESS");
    let nombre = recuperarTextoDiv("infoNombre");
    let cedula = recuperarTextoDiv("infoCedula");
    let sueldo = recuperarTextoDiv("infoSueldo");
    let cmpSueldo = parseInt(sueldo);
    
    let calculoAporteEmp = calcularAporteEmpleador(cmpSueldo);
    let rol = {};
    rol.cedula = cedula;
    rol.nombre = nombre;
    rol.sueldo = cmpSueldo;
    rol.valorAPagar = montoAPagar;
    rol.aporteEmpleado = montoAporte;
    rol.aporteEmpleador = calculoAporteEmp;

    agregarRol(rol);
    alert("ROL AGREGADO EXITOSAMENTE");
    deshabilitarComponente("botonGuardar");
    mostrarTotales();
 }

mostrarRol = function(){
    let cmpRol = document.getElementById("tablaResumen");
    let contenidoRol = "<table><tr>"+
    "<th>CEDULA</th>"+
    "<th>NOMBRE</th>"+
    "<th>APELLIDO</th>"+
    "<th>SUELDO</th>"+
    "</tr>";
    let elementoEmpleado ;
    for ( let i = 0; i < roles.length;i++){
        elementoEmpleado = roles[i];
        contenidoRol +=
        "<tr><td>"+elementoEmpleado.cedula+"</td>"+
        "<td>"+elementoEmpleado.nombre+"</td>"+
        "<td>"+elementoEmpleado.valorAPagar+"</td>"+
        "<td>"+elementoEmpleado.aporteEmpleado+"</td>"+
        "<td>"+elementoEmpleado.aporteEmpleador+"</td>"+
        "</tr>";
    }
    contenidoRol += "</table>";
    cmpRol.innerHTML = contenidoRol;

}


//empleado
mostrarEmpleado = function(){

    let cmpTabla = document.getElementById("tablaEmpleados");
    let contenidoTabla = "<table><tr>"+
    "<th>CEDULA</th>"+
    "<th>NOMBRE</th>"+
    "<th>APELLIDO</th>"+
    "<th>SUELDO</th>"+
    "</tr>";
    let elementoCliente ;
    for ( let i = 0; i < empleados.length;i++){
        elementoCliente = empleados[i];
        contenidoTabla +=
        "<tr><td>"+elementoCliente.cedula+"</td>"+
        "<td>"+elementoCliente.nombre+"</td>"+
        "<td>"+elementoCliente.apellido+"</td>"+
        "<td>"+elementoCliente.sueldo+"</td>"+
        "</tr>";
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}

buscarEmpleado = function(cedula){
    let elementoEmpleado;
    let clienteEncontrado = null;
    for(let i = 0; i < empleados.length;i++){
        elementoEmpleado = empleados[i];
        if(elementoEmpleado.cedula == cedula){
            clienteEncontrado = elementoEmpleado;
            break
        }
    }
    return clienteEncontrado;
}

agregarEmpleado = function(empleado){
    let resultado;
    resultado = buscarEmpleado(empleado.cedula);
    if(resultado == null){
        empleados.push(empleado);
        return true;
    }else{
        return false;
    }

}

guardar = function(){
    let cmpCedula = recuperarTexto("txtCedula");
    let cmpCedula1 = cmpCedula.length;
    let hayErrores = false;
    if(cmpCedula1 >= 11 ){
        mostrarTexto("lblErrorCedula","LA CEDULA TIENE QUE TENER EXACTAMENTE 10 CARACTERES");
    }else if(cmpCedula == ""){
        mostrarTexto("lblErrorCedula","CAMPO OBLIGATORIO");
    }else if(hayErrores == false){
        mostrarTexto("lblErrorCedula","");
    }

    let cmpNombre = recuperarTexto("txtNombre");
    let cmpNombre1 = cmpNombre.length;
    let nombreMayusculas = cmpNombre.toUpperCase();
    let hayErrores2 = false;
    if(cmpNombre1 > 0 && cmpNombre1 < 3){
        mostrarTexto("lblErrorNombre"," DEBE TENER ALMENOS 3 CARACTERES");
    }else if(cmpNombre != nombreMayusculas ){
        mostrarTexto("lblErrorNombre","SOLO SE PERMITEN LETRAS MAYUSCULAS");
    }else if(cmpNombre == ""){
        mostrarTexto("lblErrorNombre","CAMPO OBLIGATORIO");
    }else if(hayErrores2 == false){
        mostrarTexto("lblErrorNombre","");
    }

    let cmpApellido= recuperarTexto("txtApellido");
    let cmpApellido1 = cmpApellido.length;
    let apellidoMayusculas = cmpApellido.toUpperCase();
    let hayErrores3 = false;
    if(cmpApellido1 > 0 && cmpApellido1 < 3){
        mostrarTexto("lblErrorApellido"," DEBE TENER ALMENOS 3 CARACTERES");
    }else if(cmpApellido != apellidoMayusculas ){
        mostrarTexto("lblErrorApellido","SOLO SE PERMITEN LETRAS MAYUSCULAS");
    }else if(cmpApellido == ""){
        mostrarTexto("lblErrorApellido","CAMPO OBLIGATORIO");
    }else if(hayErrores3 == false){
        mostrarTexto("lblErrorApellido","");
    }

    let cmpSueldo =recuperarTexto("txtSueldo");
    let cmpSueldoFlotante = parseFloat(cmpSueldo);
    let hayErrores4 = false;
    if(cmpSueldoFlotante < 400 || cmpSueldoFlotante > 5000){
        mostrarTexto("lblErrorSueldo","DEBE SER UN SUELDO ENTRE 400 Y 5000");
    }else if(cmpSueldo == ""){
        mostrarTexto("lblErrorSueldo","CAMPO OBLIGATORIO");
    }else if(hayErrores4 == false){
        mostrarTexto("lblErrorSueldo","");
    }

    esNuevo = true;
    let empleado = {
        cedula:cmpCedula,
        nombre:cmpNombre,
        apellido:cmpApellido,
        sueldo: cmpSueldo
    };
    let cmpAregarEmp = agregarEmpleado(empleado.cedula);
    if(cmpAregarEmp != true){
        empleados.push(empleado);
        alert("EMPLEADO AGREGADO");
        mostrarEmpleado();
    }else{
        alert("YA EXIXTE UN EMPLEADO CON CEDULA: "+empleado.cedula);
    }

    bloquearCajaTexto();
    esNuevo = false;

    let cmpEmpleado = buscarEmpleado(empleado.cedula);
    for( let i = 0; i < empleados.length;i++){
        cmpEmpleado = empleados[i];
        mostrarTextoEnCaja("txtCedula",cmpEmpleado.cedula);
        mostrarTextoEnCaja("txtNombre",cmpEmpleado.nombre);
        mostrarTextoEnCaja("txtApellido",cmpEmpleado.apellido);
        mostrarTextoEnCaja("txtSueldo",cmpEmpleado.sueldo);
        alert(" EMPLEADO MODIFICADO EXITOSAMENTE");
    }
    bloquearCajaTexto();
    
}

ejecutarBusqueda = function(){
    let valorCedula = recuperarTexto("txtBusquedaCedula");
    let empleado = buscarEmpleado(valorCedula);
    if(empleado == null){
        alert("CLIENTE NO ENCONTRADO");

    }else{
        mostrarTextoEnCaja("txtCedula",empleado.cedula);
        mostrarTextoEnCaja("txtNombre",empleado.nombre);
        mostrarTextoEnCaja("txtApellido",empleado.apellido);
        mostrarTextoEnCaja("txtSueldo",empleado.sueldo);
    }
    deshabilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    

}

bloquearCajaTexto = function(){
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");

}

ejecutarNuevo = function(){
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
    esNuevo = true;
}

mostrarOpcionEmpleado = function(){
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleado();
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}
mostrarOpcionRol = function(){
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
    deshabilitarComponente("botonGuardar");
    mostrarRol();

}
mostrarOpcionResumen = function(){
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
}
limpiar = function(){
    mostrarTextoEnCaja("txtCedula","");
    mostrarTextoEnCaja("txtNombre","");
    mostrarTextoEnCaja("txtApellido","");
    mostrarTextoEnCaja("txtSueldo","");
    esNuevo = false
    bloquearCajaTexto();

}
