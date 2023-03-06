const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
console.log(firstname)
const lastname = document.getElementById('id_lname');
const email = document.getElementById('id_email');
const username = document.getElementById('id_username');
console.log(username)
const password = document.getElementById('id_password');
const confirm_password = document.getElementById('id_confirmpassword');

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const usernamevalue = username.value.trim();
    const passwordValue = password.value.trim();
    const confirm_passwordValue = confirm_password.value.trim();


    if(firstnameValue === '') {
        setError(username, 'Firstname is required');
    } else {
        setSuccess(username);
    }

    if(lastnameValue === '') {
        setError(username, 'Lastname is required');
    } else {
        setSuccess(username);
    }

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(confirm_passwordValue === '') {
        setError(confirm_password, 'Please confirm your password');
    } else if (confirm_passwordValue !== passwordValue) {
        setError(confirm_password, "Passwords doesn't match");
    } else {
        setSuccess(confirm_password);
    }

};
