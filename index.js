
function goToHomePage(){
 console.log("Home")
  document.getElementById("home").style.display = "block";
  document.getElementById("sign-up").style.display = "none";
  document.getElementById("login").style.display = "none";
}

function goToSignUpPage(){
    console.log("Signup")
    document.getElementById("home").style.display = "none";
    document.getElementById("sign-up").style.display = "block";
    document.getElementById("login").style.display = "none";
}

function goToLoginPage(){
    console.log("Login")
    document.getElementById("home").style.display = "none";
    document.getElementById("sign-up").style.display = "none";
    document.getElementById("login").style.display = "block";
}