const name = document.getElementById("name")
const email = document.getElementById("email")
const password = document.getElementById("password")
const btn = document.getElementById("btn")


const nameerror = document.getElementById("nameError")
const emailerror = document.getElementById("emailError")
const passworderror = document.getElementById("passwordError")

// Validate Name
function validateName() {
    if (name.value.trim() === "") {
        nameerror.textContent = "Name cannot be empty";
        return false;
    } else {
        nameerror.textContent = "";
        return true;
    }
}

// Validate Email
function validateEmail() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email.value.trim())) {
        emailerror.textContent = "Invalid email format";
        return false;
    } else {
        emailerror.textContent = "";
        return true;
    }
}

// Validate Password
function validatePassword() {
    if (password.value.trim().length < 6) {
        passworderror.textContent = "Password must be at least 6 characters long";
        return false;
    } else {
        passworderror.textContent = "";
        return true;
    }
}
// Enable or Disable Submit Button
function validateForm() {
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    btn.disabled = !(isNameValid && isEmailValid && isPasswordValid);
}

// Real-time validation on input change
name.addEventListener('input', validateForm);
email.addEventListener('input', validateForm);
password.addEventListener('input', validateForm);


// Prevent form submission if fields are not valid
document.getElementById('registrationform').addEventListener('submit', function () {
    validateForm();
    if (!btn.disabled) {
        alert('Form submitted successfully!');
    }
});