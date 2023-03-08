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
    var name = document.forms['myForm']["firstname"].value;
    
    if (name.length == 0){
        seterror("fname", "*Length of name cannot be zero!");
        returnval = false;
    }

    var email = document.forms['myForm']["email"].value;

    if (email.length == 0){
        seterror("femail", "*Length of email cannot be zero!");
        returnval = false;
    }

    if (email.length>30){
        seterror("femail", "*Email length is too long");
        returnval = false;
    }

    var username = document.forms['myForm']["username"].value;
    
    if (username.length == 0){
        seterror("fuser", "*Length of username cannot be zero!");
        returnval = false;
    }

    var password = document.forms['myForm']["password"].value;

    if (password.length == 0){
        seterror("fpass", "*Length of password cannot be zero!");
        returnval = false;
    }

    if (password.length < 6){
        seterror("fpass", "*Password should be atleast 6 characters long!");
        returnval = false;
    }

    var cpassword = document.forms['myForm']["confirm_password"].value;
    if (cpassword != password){
        seterror("cpass", "*Password and Confirm password should match!");
        returnval = false;
        console.log("password")
    }

    return returnval;
}

