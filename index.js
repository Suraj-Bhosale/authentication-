
const firstName = document.getElementById('firstName-input');
const lastName = document.getElementById('lastName-input')
const email = document.getElementById('email-input')
const phone = document.getElementById('phone-input')
const password = document.getElementById('password-input')
const confirmPassword = document.getElementById('confirm-password-input')
const signup = document.getElementById('signup-input')
const loginEmail = document.getElementById('login-email-input')
const loginPassword = document.getElementById('login-password-input')

let checkCondition = () =>{
    let count = 0;
     console.log("signup value: "+signup.value)
    // console.log("phone value: "+phone.value)
    if (firstName.value.length >= 3){
        document.getElementById('valid-feedback-first-name').style.display = 'block';
        document.getElementById('invalid-feedback-first-name').style.display = 'none';
        count++;
    }else{
        document.getElementById('valid-feedback-first-name').style.display = 'none';
        document.getElementById('invalid-feedback-first-name').style.display = 'block';
        
    }

    if (lastName.value.length >= 3){
        document.getElementById('valid-feedback-last-name').style.display = 'block';
        document.getElementById('invalid-feedback-last-name').style.display = 'none';
        count++;
    }else{
        document.getElementById('valid-feedback-last-name').style.display = 'none';
        document.getElementById('invalid-feedback-last-name').style.display = 'block';
        
    }

    const regx = /^([a-zA-Z0-9])+@(gmail)+.(com)+$/
    if (email.value.match(regx)){
        document.getElementById('email-valid-feedback').style.display = 'block';
        document.getElementById('email-invalid-feedback').style.display = 'none';
        count++;
    }else{
        document.getElementById('email-valid-feedback').style.display = 'none';
        document.getElementById('email-invalid-feedback').style.display = 'block';
        
    }

    if (phone.value.length >= 10){
        document.getElementById('phone-valid-feedback').style.display = 'block';
        document.getElementById('phone-invalid-feedback').style.display = 'none';
        count++;
    }else{
        document.getElementById('phone-valid-feedback').style.display = 'none';
        document.getElementById('phone-invalid-feedback').style.display = 'block';
        
    }

    if (password.value.length >= 10){
        document.getElementById('password-valid-feedback').style.display = 'block';
        document.getElementById('password-invalid-feedback').style.display = 'none';
        count++;
    }else{
        document.getElementById('password-valid-feedback').style.display = 'none';
        document.getElementById('password-invalid-feedback').style.display = 'block';
        
    }

    if (password.value === confirmPassword.value){
        document.getElementById('confirm-password-valid-feedback').style.display = 'block';
        document.getElementById('confirm-password-invalid-feedback').style.display = 'none';
        count++;
    }else{
        document.getElementById('confirm-password-valid-feedback').style.display = 'none';
        document.getElementById('confirm-password-invalid-feedback').style.display = 'block';
        
    }

    if(count == 6 && signup == "true"){
       alert('Signup successful!!!')
    }else{
        alert('Check Details Properly')
        
       }
}


let loginApp = () =>{
   let originalEmail = email.value;
   let originalPassword = password.value;
   let countLogin = 0;
   console.log('Check::: '+loginEmail.value)
   if (originalEmail === loginEmail.value && loginEmail.value != ""){
       document.getElementById('validLogin-email-feedback').style.display = 'block';
       document.getElementById('invalidLogin-email-feedback').style.display = 'none';
       countLogin++;
   }else{
       document.getElementById('validLogin-email-feedback').style.display = 'none';
       document.getElementById('invalidLogin-email-feedback').style.display = 'block';
   }


   if (originalPassword === loginPassword.value && loginPassword.value != ""){
       document.getElementById('validLogin-password-feedback').style.display = 'block';
       document.getElementById('invalidLogin-password-feedback').style.display = 'none';
       countLogin++;
   }else{
       document.getElementById('validLogin-password-feedback').style.display = 'none';
       document.getElementById('invalidLogin-password-feedback').style.display = 'block';
   }

   if(countLogin == 2){
    alert('Login successful!!!')
   }else{
    alert('Check Details Properly')
    
   }
}

function goToHomePage(){
 console.log("Home")
  document.getElementById("home").style.display = "block";
  document.getElementById("sign-up").style.display = "none";
  document.getElementById("login").style.display = "none";
  document.getElementById("home-page-id").classList.add("active")
  document.getElementById("signup-page-id").classList.remove("active")
  document.getElementById("login-page-id").classList.remove("active")
}

function goToSignUpPage(){
    console.log("Signup")
    document.getElementById("home").style.display = "none";
    document.getElementById("sign-up").style.display = "block";
    document.getElementById("login").style.display = "none";
    document.getElementById("home-page-id").classList.remove("active")
    document.getElementById("signup-page-id").classList.add("active")
    document.getElementById("login-page-id").classList.remove("active")
}

function goToLoginPage(){
    console.log("Login")
    document.getElementById("home").style.display = "none";
    document.getElementById("sign-up").style.display = "none";
    document.getElementById("login").style.display = "block";
    document.getElementById("home-page-id").classList.remove("active")
    document.getElementById("signup-page-id").classList.remove("active")
    document.getElementById("login-page-id").classList.add("active")
}