const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('id_lname');
const email = document.getElementById('id_email');
const username = document.getElementById('id_username');
const password = document.getElementById('id_password');
const confirm_password = document.getElementById('id_confirmpassword');
const errorElement = document.getElementsByClassName('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (username.value === '' || username.value == null) {
    messages.push('UserName is required')
  }

  if (password.value.length <= 6) {
    messages.push('Password must be longer than 6 characters')
  }

  if (password.value.length >= 20) {
    messages.push('Password must be less than 20 characters')
  }

  if (password.value === 'password') {
    messages.push('Password cannot be password')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})