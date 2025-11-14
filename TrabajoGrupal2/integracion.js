cuentas=[
    {numeroCuenta:"02234567", cedula:"1714616123",nombre:"Juan",apellido:"Perez",saldo:0.0},
    {numeroCuenta:"02345211",cedula:"1281238233",nombre:"Felipe",apellido:"Caicedo",saldo:0.0}
]

movimientos=[
    {numeroCuenta:"02234567",monto:10.24,tipo:"D"},
    {numeroCuenta:"02345211",monto:45.90,tipo:"D"},
    {numeroCuenta:"02234567",monto:65.23,tipo:"C"},
    {numeroCuenta:"02345211",monto:65.23,tipo:"C"},
    {numeroCuenta:"02345211",monto:12.0,tipo:"D"},
]

/*
    En este archivo se deben colocar todas las funciones de cuentas, movimientos y transacciones
    IMPORTANTE: NO DUPLICAR FUNCIONES, si existe una misma función en varios archivos,
    dejar solo una de ellas, ejemplo la función buscarCuenta
*/

//OCULTAR Y MOSTRAR LOS DIVS, para que cada opción muestre solo su parte


//Cuando se realiza un depósito de forma exitosa, se debe crear un objeto movimiento
//con el tipo C, que corresponde a CREDITO, el número de cuenta a la que se hizo el depósito
//y el monto que se depositó. Este objeto movimiento se agrega al arreglo movimientos

//Cuando se realiza un retiro de forma exitosa, se debe crear un objeto movimiento
//con el tipo D, que corresponde a DEBITO, el número de cuenta a la que se hizo el retiro
//y el monto que se retiró. Este objeto movimiento se agrega al arreglo movimientos

//cuentas
cargar=function(){
    mostrarComponente("divCuentas");
    
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

//movimientos


filtrarMovimientos=function(numeroCuenta){ 
    let movimientosCuenta=[];
    //Se barre el arreglo de movimientos
    //En cada iteración, verifica si el numero de cuenta del movimiento es igual al que recibe como parametro
    //En caso de serlo, agrega la cuenta al arreglo movimientosCuenta
    //Invoca a mostrarMovimientos, pasándole como parámetro movimientosCuenta
    for (let i=0; i <movimientos.length; i++){
        let movimiento = movimientos[i];
        if(movimiento.numeroCuenta == numeroCuenta){
            movimientosCuenta.push(movimiento);
        }
    }
    mostrarMovimientos(movimientosCuenta);
}

/*
    Recibe un arreglo con los movimientos que va a mostrar en pantalla
*/
mostrarMovimientos=function(misMovimientos){
    //Muestra en pantalla una tabla con los movimientos que recibe en misMovimientos
    //Columnas: NUMERO CUENTA, MONTO, TIPO
    //Si ya pinta correctamente la tabla, hacer el siguiente cambio:
    //Si el tipo es D(DEBITO), mostrar el monto en negativo (multiplicar por -1)
    //Si el tipo es C(CREDITO), mostrar el monto en positivo (tal como está guardado)
     let cmpTabla = document.getElementById("lblTabla");
   let contenidoTabla = "<table><tr>"+
   "<th>Numero Cuenta</th>"+
   "<th>MONTO</th>"+
   "<th>TIPO</th>"+
   "</tr>";
   for (let i=0;i < misMovimientos.length; i++){
    let elementoMov = misMovimientos[i];
    let montoMostrado = elementoMov.monto;
    if(elementoMov.tipo == "D"){
        montoMostrado = elementoMov.monto * -1;
    } 
    contenidoTabla +=
    "<tr><td>"+ elementoMov.numeroCuenta+"</td>"+
    "<td>"+montoMostrado + "</td>"+
    "<td>"+elementoMov.tipo+"</td>"+
    "</tr>";
   }
   contenidoTabla += "</table>";
   cmpTabla.innerHTML = contenidoTabla;
}

//transacciones


/*
    Busca la cuenta en el arreglo en función del número de cuenta,
    si existe retorna el objeto cuenta, caso contrario retorna null. 
*/


ejecutarBusqueda=function(){
    //toma el numero de cuenta de la caja de texto
    //invoca a buscarCuenta y guarda el resultado en una variable
    //Si el resultado es diferente de null, muestra en pantalla, caso contrario muestra un alert
    let cmpNumCuenta = recuperarTexto("caja1");
    let busquedaCuenta = buscarCuenta(cmpNumCuenta);
    let pantalla;
    if(busquedaCuenta != null){
        pantalla = mostrarTexto("busqueda",busquedaCuenta);
        return pantalla;
    }else{
        alert("LA CUENTA NO EXISTE");
    }
}

depositar=function(numeroCuenta,monto){
    let cuentaAfectada;
    //invoca a buscarCuenta, guarda el resultado en la variable cuentaAfectada;
    //Al saldo actual de la cuenta afectada, le suma el monto que recibe como parámetro
    cuentaAfectada = buscarCuenta(numeroCuenta);
    if(cuentaAfectada != null){
        cuentaAfectada.saldo = cuentaAfectada.saldo + monto;
        return cuentaAfectada;
    }else{
        return null;
    } 
} 

ejecutarDeposito=function(){
    //Toma el numero de cuenta ingresado en la caja de texto
    //Toma el monto ingresado en la caja de texto
    //invoca a depositar
    //Muestra un mensaje TRANSACCION EXITOSA
    //Muestra en pantalla el nuevo saldo de la cuenta
    let cmpNumCuenta = recuperarTexto("caja1");
    let cmpMonto = recuperarInt("caja2");
    let cmpDeposito = depositar(cmpNumCuenta,cmpMonto);
    if (cmpDeposito != null){
        alert("TRANSACCION EXITOSA")
        mostrarTexto("saldo","SALDO: "+cmpDeposito.saldo);
    }

}

depositar=function(numeroCuenta,monto){
    let cuentaAfectada;
    //invoca a buscarCuenta, guarda el resultado en la variable cuentaAfectada;
    //Al saldo actual de la cuenta afectada, le suma el monto que recibe como parámetro
}

retirar=function(numeroCuenta,monto){
    let cuentaAfectada;
    //invoca a buscarCuenta, guarda el resultado en la variable cuentaAfectada;
    //Valida si la cuenta tiene el saldo suficiente para retirar el monto
    //Si el saldo es suficiente,al saldo actual de la cuenta afectada, le resta el monto que recibe como parámetro
    //Si el saldo no es suficiente, muestra un alert SALDO INSUFICIENTE
    //Si logra retirar muestra un mensaje TRANSACCION EXITOSA y muestra en pantalla el nuevo saldo de la cuenta
    cuentaAfectada = buscarCuenta(numeroCuenta);
    if(cuentaAfectada != null){
        if(cuentaAfectada.saldo >= monto){
            cuentaAfectada.saldo = cuentaAfectada.saldo - monto;
        }else{
            alert("SALDO INSUFICIENTE");
            
        }
    }else{
        alert("LA CUENTA NO EXISTE");
    }
}
