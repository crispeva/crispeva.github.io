window.onload = iniciar; //Sin paréntesis

function iniciar(){
    document.getElementById("enviar").addEventListener('click', validar, false);
}

function validaNombre(){
    
    let elemento=document.getElementById("nombre");
    
    if (elemento.value==""){
       
        error(elemento);
        
        return false;
    }
    return true;
}
function validaEmail(){
    
    let elemento=document.getElementById("email");
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valor)||elemento.value==""){
   
       
        error(elemento);
        
        return false;
    }
    return true;
}

function validaTelefono(){
    
    let elemento=document.getElementById("telefono");
    limpiarError(elemento);
    if (isNaN(elemento.value)||elemento.value==""){
        
        error(elemento);
        
        return false;
    }
    return true;
}





function validar(e){
    if (!e) e=window.event;
    limpiarError(e.target);
    if(validaNombre()&&validaTelefono()&&validaEmail()&&confirm("Enviar el formulario?")){
        return true;
    } else {
        e.preventDefault();
        return false;
    }

}

function error(elemento){
    elemento.classList.add("error");
    document.getElementById("msgerror").innerHTML="El formulario tiene errores.";
    elemento.focus();

}
function limpiarError(){
    document.getElementById("nombre").classList.remove("error");
    for (let j=0;j++;j<document.forms.length){
        for (let i=0;i++;i<document.forms[j].elements.length){
            document.forms[j].elements[i].classList.remove("error");

        }
    }

    document.getElementById("msgerror").innerHTML="";
}