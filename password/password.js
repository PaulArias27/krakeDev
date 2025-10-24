validarPassword = function(password){
    let errores = "";
    if(password.length < 8){
        errores += "DEBE TENER MINIMO 8 CARACTERES."
    }
    if(password.length > 16){
        errores += "DEBE TENER MAXIMO 16 CARACTERES."
    }
    let tieneMayuscula = false;
    let tieneDigito = false;
    let tieneEspecial = false;
    for(let i = 0;i < password.length;i++){
        let palabra = password.charAt(i);
        if(palabra >= 'A' && palabra <= 'Z'){
            tieneMayuscula = true;
        }
        if(palabra >= '0' && palabra <= '9'){
            tieneDigito = true;
        }
        if(palabra === '*' || palabra === '-' || palabra === '_'){
            tieneEspecial = true;
        }
        
    }
    if(!tieneMayuscula){
        errores += " DEBE CONTENER AL MENOS UNA LETRA MAYUSCULA.";

    }
    if(!tieneDigito){
        errores += " DEBE CONTENER AL MENOS UN DIGITO."
    }
    if(!tieneEspecial){
        errores += " DEBE CONTENER AL MENOS UN CARACTER ESPECIAL (*,-,_)";

    }
    return errores;

}
ejecutarValidacion = function(){
    let password = recuperarTexto("txtPassword");
    let resultado = validarPassword(password);

    if(resultado.length === 0){
        mostrarTexto("resultado","Password valido");
    }else{
        mostrarTexto("resultado",resultado);
    }

}