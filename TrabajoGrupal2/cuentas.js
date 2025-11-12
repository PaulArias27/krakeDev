cuentas=[
    {numeroCuenta:"02234567", cedula:"1714616123",nombre:"Juan",apellido:"Perez",saldo:0.0},
    {numeroCuenta:"02345211",cedula:"1281238233",nombre:"Felipe",apellido:"Caicedo",saldo:0.0}
]

cargar=function(){
    mostrarComponente("divCuentas");
    ocultarComponente("divMovimientos");
    ocultarComponente("divTransacciones");
    
}

mostrarCuentas=function(){
    /*
        Muestra en pantalla una tabla con la información de todas las cuentas del arreglo.
        Columnas: NUMERO CUENTA, NOMBRE, SALDO
        En la columna NOMBRE concatenar el nombre y el apellido
    */
   let cmpTabla = document.getElementById("lblTabla");
   let contenidoTabla = "<table><tr>"+
   "<th>Numero Cuenta</th>"+
   "<th>Nombre</th>"+
   "<th>Saldo</th>"+
   "</tr>";
   for (let i=0;i < cuentas.length; i++){
    let elementoCuentas = cuentas[i];
    let nombreCompleto = elementoCuentas.nombre + " " + elementoCuentas.apellido;
    contenidoTabla +=
    "<tr><td>"+ elementoCuentas.numeroCuenta+"</td>"+
    "<td>"+nombreCompleto + "</td>"+
    "<td>"+elementoCuentas.saldo+"</td>"+
    "</tr>";
   }
   contenidoTabla += "</table>";
   cmpTabla.innerHTML = contenidoTabla;

} 

/*
    Busca la cuenta en el arreglo en función del número de cuenta,
    si existe retorna el objeto cuenta, caso contrario retorna null. 
*/
buscarCuenta=function(numeroCuenta){
    let elementoCuenta;
    let cuentaEncontrada = null;
    for(let i=0;i < cuentas.length; i++){
        elementoCuenta = cuentas[i];
        if(elementoCuenta.numeroCuenta == numeroCuenta){
            cuentaEncontrada = elementoCuenta;
        }else{
            return null;
        }  
    }
    return cuentaEncontrada;


}

/*
    Agrega una cuenta al arreglo, solamente si no existe otra cuenta con el mismo numero.
    No retorna nada
*/
agregarCuenta=function(cuenta){
    //Si ya existe mostrar un alert CUENTA EXISTENTE
    //Si se agrega, mostrar un alert CUENTA AGREGADA
    let cuentaExistente = buscarCuenta(cuenta.numeroCuenta);
    if(cuentaExistente == cuenta.numeroCuenta){
        alert("ERROR !! CUENTA EXISTENTE");
    }else{
        cuentas.push(cuenta);
        alert("CUENTA AGREGADA");
    }       

}

agregar=function(){
    //Toma los valores de las cajas de texto, sin validaciones
    //Crea un objeto cuenta y agrega los atributos con los valores de las cajas respectivas
    //Invoca a agregarCuenta
    //Invoca a mostrarCuentas
    let cmpNumCuenta = recuperarInt("caja1");
    let cmpCedula = recuperarInt("caja2");
    let cmpNombre = recuperarTexto("caja3");

    let cuenta = {};
    cuenta.numeroCuenta = cmpNumCuenta;
    cuenta.cedula = cmpCedula;
    cuenta.nombre = cmpNombre;

    agregarCuenta(cuenta);
    mostrarCuentas();
}
