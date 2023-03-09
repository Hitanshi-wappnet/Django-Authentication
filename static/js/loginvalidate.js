function clearErrors(){

    errors = document.getElementsByClassName('error');
    for(let item of errors)
    {
        item.innerHTML = "";
    }
}

function seterror(id, error){
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('error')[0].innerHTML = error;
}

function validateForm(){
    var returnval = true;
    clearErrors();

    //perform validation and if validation fails, set the value of returnval to false
    var name = document.forms['myForm']["username"].value;
    
    if (name.length == 0){
        seterror("username", "*This field is required!");
        returnval = false;
    }

    var password = document.forms['myForm']["password"].value;

    if (password.length == 0){
        seterror("password", "*This feild is required!");
        returnval = false;
    }
    return returnval;
}

