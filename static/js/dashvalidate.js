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
    var oldpassword = document.forms['myForm2']["oldpassword"].value;
    var newpassword1 = document.forms['myForm2']["newpassword1"].value;
    var newpassword2 = document.forms['myForm2']["newpassword2"].value;

    if (oldpassword.length == 0){
        seterror("oldpass", "*This feild is required!");
        returnval = false;
    }

    if (newpassword1.length < 6){
        seterror("newpass1", "*Password should be atleast 6 characters long!");
        returnval = false;
    }

    if (newpassword1.length == 0){
        seterror("newpass1", "*This feild is required!");
        returnval = false;
    }

    if (newpassword1 != newpassword2){
        seterror("newpass2", "*Password and Confirm password should match!");
        returnval = false;
    }
    return returnval;
}
