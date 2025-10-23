validarEstructura = function(placa){
    //VALIDAR LONGITUD
    let errores = []
    let longitud = placa.length;
    if(longitud < 7 || longitud > 8){
        errores.push("LA PLACA DEBE TENER 7 U 8 CARACTERES");
    }
    //VALIDAR QUE SEAN MAYUSCULAS LOS 3 PRIMEROS CARACTERES
    if(!/[A-Z]/.test(placa.charAt(0))){
        errores.push("EL PRIMER CARACTER DEBE SER UNA LETRA MAYUSCULA");
    }
    if(!/[A-Z]/.test(placa.charAt(1))){
        errores.push("EL SEGUNDO CARACTER DEBE SER UNA LETRA MAYUSCULA");
    }
    if(!/[A-Z]/.test(placa.charAt(2))){
        errores.push("EL TERCER CARACTER DEBE SER UNA LETRA MAYUSCULA");
    }
    //VALIDAR EL GUION
    if(placa.charAt(3) !== "-"){
        errores.push("EL CUARTO CARACTER DEBE SER UN GUION (-)");
    }
    //VALIDAR QUE LOS QUE SOBRAN SEAN DIGITOS
    if(!/[0-9]/.test(placa.charAt(4))){
        errores.push("EL QUINTO CARACTER DEBE SER UN DIGITO");
    }
    if(!/[0-9]/.test(placa.charAt(5))){
        errores.push("EL SEXTO CARACTER DEBE SER UN DIGITO");
    }
    if(!/[0-9]/.test(placa.charAt(6))){
        errores.push("EL SEPTIMO CARACTER DEBE SER UN DIGITO");
    }
    //Validar el octavo solo si es correcto
    if(longitud === 8 && !/[0-9]/.test(placa.charAt(7))){
        errores.push("EL OCTAVO CARACTER DEBE SER UN DIGITO");
    }
    //VALIDAR RETORNO
    if(errores.length > 0){
        return errores.join(" ");
    }else{
        return null;
    }

}
obtenerProvincia = function(placa){
    if(!placa || placa.length === 0){
        return null;
    }
    let letra = placa.charAt(0).toUpperCase();
    let provincias = {
    A: "Azuay",
    B: "Bolívar",
    C: "Carchi",
    E: "Esmeraldas",
    G: "Guayas",
    H: "Chimborazo",
    I: "Imbabura",
    L: "Loja",
    M: "Manabí",
    N: "Napo",
    O: "El Oro",
    P: "Pichincha",
    Q: "Orellana",
    R: "Los Ríos",
    S: "Morona Santiago",
    T: "Tungurahua",
    U: "Sucumbíos",
    V: "Santa Elena",
    W: "Galápagos",
    X: "Cotopaxi",
    Y: "Pastaza",
    Z: "Zamora Chinchipe"

    };
    if(provincias[letra]){
        return provincias[letra];
    }else{
        return null;
    }

}
obtenerTipoVehiculo = function(placa) {
  if (!placa || placa.length < 2) {
    return null;
  }
  let letra = placa.charAt(1).toUpperCase();

  let tipos = {
    A: "Vehículo comercial o estatal",
    Z: "Vehículo gubernamental",
    E: "Vehículo del gobierno",
    X: "Vehículo oficial",
    M: "Vehículo municipal",
    S: "Vehículo de servicio público",
    T: "Taxi o transporte público",
    P: "Vehículo particular"
  };

  if (tipos[letra]) {
    return tipos[letra];
  } else {
    return null;
  }
}

obtenerDiaPicoYPlaca = function(placa) {

    if (!placa || typeof placa !== 'string' || placa.length === 0) {
        return "Placa inválida";
    }
    let ultimoCaracter = placa.charAt(placa.length - 1);

    let ultimoDigito = parseInt(ultimoCaracter);

    switch (ultimoDigito) {
        case 1:
        case 2:
            return "Lunes";
        case 3:
        case 4:
            return "Martes";
        case 5:
        case 6:
            return "Miércoles";
        case 7:
        case 8:
            return "Jueves";
        case 9:
        case 0:
            return "Viernes";
        default:
            return "Dígito final no reconocido (Libre circulación en la práctica)";
        }
}
