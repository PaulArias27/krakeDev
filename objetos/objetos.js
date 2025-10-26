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