cuentas=[
    {numeroCuenta:"02234567", cedula:"1714616123",nombre:"Juan",apellido:"Perez",saldo:0.0},
    {numeroCuenta:"02345211",cedula:"1281238233",nombre:"Felipe",apellido:"Caicedo",saldo:0.0}
]

cargar=function(){
    mostrarComponente("divTransacciones");
    ocultarComponente("divCuentas");
    ocultarComponente("divMovimientos");
    
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
            return cuentaEncontrada;
        }  
    }
  

}

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