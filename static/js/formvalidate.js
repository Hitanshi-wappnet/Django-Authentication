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

    // perform validation and if validation fails, set the value of returnval to false
    var name = document.forms['myForm']["firstname"].value;
    
    // Show the error of required field
    if (name.length == 0){
        seterror("fname", "*This field is required!");
        returnval = false;
    }

    var email = document.forms['myForm']["email"].value;

    // Show the error of required field
    if (email.length == 0){
        seterror("femail", "*This field is required!");
        returnval = false;
    }

    // If the length is too long then seterror
    if (email.length>30){
        seterror("femail", "*Email length is too long");
        returnval = false;
    }

    var uname = document.forms['myForm']["username"].value;
    
    // Show the error of required field
    if (uname.length == 0){
        seterror("fuser", "*This field is required!");
        returnval = false;
    }

    var password = document.forms['myForm']["password"].value;

    // Show the error of required field
    if (password.length < 6){
        seterror("fpass", "*Password should be atleast 6 characters long!");
        returnval = false;
    }

    if (password.length == 0){
        seterror("fpass", "*This feild is required!");
        returnval = false;
    }

    var cpassword = document.forms['myForm']["confirm_password"].value;
    if (cpassword != password){
        seterror("cpass", "*Password and Confirm password should match!");
        returnval = false;
    }
    return returnval;
}