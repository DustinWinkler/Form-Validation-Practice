const emailError = document.getElementById('email-error'),
      countryError = document.getElementById('country-error'),
      zipcodeError = document.getElementById('zipcode-error'),
      passwordError = document.getElementById('password-error'),
      confirmationError = document.getElementById('confirmation-error'),
      emailInput = document.getElementById('email'),
      countryInput = document.getElementById('country'),
      zipcodeInput = document.getElementById('zipcode'),
      passwordInput = document.getElementById('password'),
      confirmationInput = document.getElementById('confirmation')

function showEmailError() {
  if(emailInput.validity.patternMismatch) {
    emailInput.classList.add('invalid')
    emailError.innerHTML = 'Your email is invalid.'
    emailError.classList.remove('hidden')
  }
  else {
    emailInput.classList.remove('invalid')
    emailError.innerHTML = ''
    emailError.classList.add('hidden')
  }
}
emailInput.addEventListener('input', () => {showEmailError()})

function showCountryError() {
  if(countryInput.validity.patternMismatch) {
    countryInput.classList.add('invalid')
    countryError.innerHTML = 'Please use 3 digit code. e.g. USA'
    countryError.classList.remove('hidden')
  }
  else {
    countryInput.classList.remove('invalid')
    countryError.innerHTML = ''
    countryError.classList.add('hidden')
  }
}
countryInput.addEventListener('input', () => {showCountryError()})

function showZipcodeError() {
  if (zipcodeInput.validity.patternMismatch) {
    zipcodeInput.classList.add('invalid')
    zipcodeError.innerHTML = 'Must use 5 numbers'
    zipcodeError.classList.remove('hidden')
  }
  else {
    zipcodeInput.classList.remove('invalid')
    zipcodeError.innerHTML = ''
    zipcodeError.classList.add('hidden')
  }
}
zipcodeInput.addEventListener('input', () => {showZipcodeError()})

function showPasswordError() {
  if (passwordInput.validity.patternMismatch) {
    passwordInput.classList.add('invalid')
    passwordError.innerHTML = 'Must contain a capital letter'
    passwordError.classList.remove('hidden')
  }
  else if (passwordInput.validity.tooShort) {
    passwordInput.classList.add('invalid')
    passwordError.innerHTML = 'Must be at least 8 characters long'
    passwordError.classList.remove('hidden')
  }
  else if (passwordInput.validity.tooLong) {
    passwordInput.classList.add('invalid')
    passwordError.innerHTML = 'Cannot exceed 16 characters long'
    passwordError.classList.remove('hidden')
  }
  else {
    passwordInput.classList.remove('invalid')
    passwordError.innerHTML = ''
    passwordError.classList.add('hidden')
  }
}
passwordInput.addEventListener('input', () => {showPasswordError()})

function showConfirmationError() {
  if (passwordInput.value != confirmationInput.value) {
    confirmationInput.classList.add('invalid')
    confirmationError.innerHTML = 'Must match Password'
    confirmationError.classList.remove('hidden')
  }
  else {
    confirmationInput.classList.remove('invalid')
    confirmationError.innerHTML = ''
    confirmationError.classList.add('hidden')
  }
}
confirmationInput.addEventListener('input', () => {showConfirmationError()})