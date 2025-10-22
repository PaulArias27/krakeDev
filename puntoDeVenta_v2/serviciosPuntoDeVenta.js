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

calcularDescuentoPorVolumen = function(subtotal,cantidad){
    
    if(cantidad < 3){
        return subtotal;
            
    }else if(cantidad >= 3 && cantidad <= 5){
        let descuento = subtotal * 3/100;
        return descuento;
    }else if(cantidad >= 6 && cantidad <=11){
        let descuento = subtotal * 4/100;
        return descuento;
    }else if( cantidad >=12){
        let descuento = subtotal * 5/100;
    }

}