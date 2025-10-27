probarAtributos = function(){
    let persona = {
        nombre :"pedro",
        apellido : "morales",
        edad :24,
        estaVivo : true
    }
    console.log(persona.nombre);
    console.log(persona.edad);
    if(persona.estaVivo == false){
        console.log("no esta vivo");
    }else{
        console.log("si esta vivo");
    }
}
crearProducto = function (){
    let producto1 = {
        nombre : "cuaderno",
        precio : 10.5,
        stock : 10
    }
    let producto2 = {
        nombre : "lapiz",
        precio : 2.5,
        stock : 5
    }
    console.log (producto1.nombre);
    console.log(producto2.precio);
    if(producto1.stock == producto2.stock){
        console.log("ambos productos tienen el mismo stock");
    }else if(producto1.stock > producto2.stock){
        console.log("producto 1 tiene mayor stock");
    }else if(producto1.stock < producto2.stock){
        console.log("producto 2 tiene mayor stock");
    }
}
modificarAtributos = function(){
    let cuenta = {
        numero :"5323423423",
        saldo : 0.0
    }
    cuenta.saldo = 100;
    cuenta.saldo += 10;
    console.log(cuenta.saldo);
    
}
 
crearCliente = function(){
    let cliente = {
        cedula : "2000122727",
        nombre : "juan"
    };
    let cliente1 = {};
    cliente1.nombre = "paul";
    cliente1.apellido = "arias";
    cliente1.cedula = "2000122727";

}

probarIncrementoSaldo = function(){
    let cuenta = {
        numeroCuenta :"23456",
        saldo : 34.0
    }
    incrementarSaldo(cuenta,100);
    console.log(cuenta.saldo);
}
probarDeterminarMayor =function(){
    let per1 = {
        nombre : "daniel",
        edad : 45
    }
    let per2 = {
        nombre : "valeria",
        edad: 48
    }
    let mayor = determinarMayor(per1,per2);
    if (mayor != null){
        console.log("el mayor es : " + mayor.nombre);

    }
}

incrementarSaldo = function(cuenta,monto){
    cuenta.saldo += monto;
}

determinarMayor = function(persona1,persona2){
    if(persona1.edad > persona2.edad ){
        return persona1;
    }else if(persona2.edad > persona1.edad){
        return persona2;
    }else{
        return null;
    }

}