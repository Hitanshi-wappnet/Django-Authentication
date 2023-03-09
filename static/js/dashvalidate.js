console.log("dashboard")
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

    var bookname = document.forms['myForm']["bookname"].value;
    console.log(bookname)
    var authorname = document.forms['myForm']["authorname"].value;
    var bookimage = document.forms['myForm']["bookimage"].value;

    if (bookname.length == 0){
        seterror("bn", "*This feild is required!");
        returnval = false;
        console.log('book run')
    }

    if (authorname.length == 0){
        seterror("an", "*This field is required");
        returnval = false;
    }

    if (bookimage == ""){
        seterror("bi", "*This feild is required");
        returnval = false;
    }

    //perform validation and if validation fails, set the value of returnval to false
    var oldpassword = document.forms['myForm']["oldpassword"].value;
    console.log(oldpassword)
    var newpassword1 = document.forms['myForm']["newpassword1"].value;
    var newpassword2 = document.forms['myForm']["newpassword2"].value;

    if (newpassword1.length == 0){
        seterror("newpass", "*Length of password cannot be zero!");
        returnval = false;
    }

    if (newpassword1.length < 6){
        seterror("newpass1", "*Password should be atleast 6 characters long!");
        returnval = false;
    }

    if (newpassword1 != newpassword2){
        seterror("newpass2", "*Password and Confirm password should match!");
        returnval = false;
        console.log('password dont match')
    }
    return returnval;
}

