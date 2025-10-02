calcularValorDescuento = function(monto,porcentageDescuento){
    let valorDescuento = monto * porcentageDescuento/100;
    return valorDescuento;
}

calcularIva = function(monto){
    let aplicarIva = monto * 12/100;
    return aplicarIva;
}

clacularSubtotal = function(precio,cantidad){
    let subTotal = precio * cantidad;
    return subTotal;
}

calcularTotal = function(subtotal,descuento,iva){
    let valorTotal = subtotal - descuento + iva;
    return valorTotal;
}
