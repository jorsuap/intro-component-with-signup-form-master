function validarcorreo(){
    var valor = document.getElementById("email").value;
    var stilo = document.getElementById("email");
    var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var valido = expReg.test(valor);
    var msjalert = document.getElementById("idmsnerror");
    
    if(valido==false){
        stilo.classList.add("error");
        msjalert.classList.add("active");
        event.preventDefault();
    }
    else{
        stilo.classList.remove("error");
        msjalert.classList.remove("active");
    }

    // var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    // var valido = expReg.test(email);
    // var stilo = document.getElementById("email");
    // var msjalert = document.getElementById("idmsnerror")
    // if(valido==false){
    //     stilo.classList.add("error");
    //     msjalert.classList.add("active");
    //     event.preventDefault();
    // }
    // else{
    //     stilo.classList.remove("error");
    //     msjalert.classList.remove("active");
    // }
    
    var espacio1 = document.getElementById("firstname").value;
    var first = document.getElementById("firstname");
    var msn = document.getElementsByClassName("msnerror")[0];

    if(espacio1.length == 0){
        first.classList.add("error");
        msn.classList.add("active");
        event.preventDefault();
    }
    else{
        first.classList.remove("error");
        msn.classList.remove("active");
    }

    var espacio2 = document.getElementById("lastmane").value;
    var last = document.getElementById("lastmane");
    var msn = document.getElementsByClassName("msnerror")[1];

    if(espacio2.length == 0){
        last.classList.add("error");
        msn.classList.add("active");
        event.preventDefault();
    }
    else{
        last.classList.remove("error");
        msn.classList.remove("active");
    }

    var espacio3 = document.getElementById("password").value;
    var pass = document.getElementById("password");
    var msn = document.getElementsByClassName("msnerror")[3];

    if(espacio3.length == 0){
        pass.classList.add("error");
        msn.classList.add("active");
        event.preventDefault();
    }
    else{
        pass.classList.remove("error");
        msn.classList.remove("active");
    }
}