esMayuscula = function(caracter){
    let valorCodigo;
    valorCodigo = caracter.charAt(0);
    if(valorCodigo >= 65 || valorCodigo <= 90 ){
        return true;
    }else{
        return false;
    }
}
esDigito = function(caracter){
    let posicion = caracter.length;
    let valorCodigo;
    valorCodigo = caracter.charAt(posicion);
    if(valorCodigo >= 48 || valorCodigo <=57){
        return true;
    }else{
        return false;
    }
}
esGuion = function(caracter){
    caracter = "-";
    let valorCodigo = caracter.charAt(0);
    if(valorCodigo == 45){
        return true;
    }else{
        return false;
    }
}