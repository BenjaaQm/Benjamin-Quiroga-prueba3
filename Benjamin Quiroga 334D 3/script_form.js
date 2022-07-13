function validar() 
{
    let nombres = document.formulario.nombres.value
    let apellidos = document.formulario.apellidos.value
    let pais = document.formulario.pais.value
    let rut = document.formulario.rut.value
    let telefono = document.formulario.telefono.value

    if(nombres.length<3)
    {
        alert("Nombres debe contener minimo 3 caracteres");
        document.formulario.nombres.focus();
        return false;
    }

    if(apellidos.length<3)
    {
        alert("Apellidos deben contener minito 3 caracteres");
        document.formulario.apellidos.focus();
        return false;
    }

    if(nombres.length<3)
    {
        alert("Nombres debe contener minimo 3 caracteres");
        document.formulario.nombres.focus();
        return false;
    }

    if(pais.length<3)
    {
        alert("Pais deben contener minito 3 caracteres");
        document.formulario.pais.focus();
        return false;
    }

    if((rut.length<9 || rut.length>10))
    {
        alert("rut debe contener entre 9 y 10 caracteres");
        document.formulario.rut.focus();
        return false;
    }
    if(rut.charAt(8)!="-")
    {
        alert("rut debe contener un guion antes digito verificador (antes de el ultimo digito)");
        document.formulario.rut.focus();
        return false;
    }
    
    if (telefono.length!=9)
    {
        alert("telefono debe tener un largo de 9");
        document.formulario.focus();
        return false;
    }
    if(telefono.charAt(0)!=9)
    {
        alert("telefono debe comenzar con 9");
        document.formulario.telefono.focus();
        return false;
    }   
                        //*** profe debe abrir el formulario en servidor en vivo para que le muestre los datos previamente almacenador en la pagina externa windows.open ***
    alert("ok")
    wins=["INFORMACION_DE_REGISTRO","Nombres:"+nombres,"Apellidos:"+apellidos,"Pais:"+pais,"Rut:"+rut,"Telefono:"+telefono];
    window.open(wins,"top=500,left=500,width=400,height=400");
        return false;
}
function validar_caracteres(evt){
    var telefonov = (evt.which) ? evt.which : evt.keyCode;

    if(telefonov==13) {
        return true;
    }else if(telefonov>=48 && telefonov<=57){
        return true;
    }else{
        
        alert("teléfono debe contener solo numeros");
        return false;
    }
}
function validar_caracteresr(evt){
    var rutv = (evt.which) ? evt.which : evt.keyCode;
    if(rutv==13){
        return true;
    }else if(rutv==45){
        return true;
    }else if(rutv>=48 && rutv<=57){
        return true;
    }else{
        alert("debe contener solo numeros y un guion")
        return false;
    }
}
