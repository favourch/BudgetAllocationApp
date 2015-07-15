//*SignUp, SignIn and Redirect */


/*SignUp */

function signUp(){
document.getElementById("btn-signup").addEventListener('click',function() {

  //set the values eneterd in the fields to appropriate variable names
  /* */

    var userEmail = document.getElementById('email').value;
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var passWord = document.getElementById('password').value;
    var pwdMatch = document.getElementById('re-enterpwd').value;

    if(userEmail === "" || firstName === "" || lastName === "" || passWord === ""){
      document.getElementById('message').className = "alert alert-danger";
      document.getElementById('message').innerHTML = "You just goofed! You left something out, try again"
    }else if(pwdMatch !== passWord){
      document.getElementById('message').className = "alert alert-danger";
      document.getElementById('message').innerHTML = "Sparky, your password didnt match, try again."
    }else{

    // save user data to localStorage
    /* */

    var _user = {};
    _user.userEmail= userEmail;
    _user.firstName = firstName;
    _user.lastName = lastName;
    _user.passWord = passWord;
    localStorage.setItem( '_user', JSON.stringify(_user) );
    pageRedirect();
  }
});
}

/*SignIn */

function signIn(){
document.getElementById("btn-signin").addEventListener('click',function() {

  //store the values eneterd in the fields to appropriate variable names
  /* */

    var userEmail = document.getElementById('login-username').value;
    var passWord = document.getElementById('login-password').value;
    
    if(userEmail === "" || passWord === ""){
      document.getElementById('login-alert').className = "alert alert-danger";
      document.getElementById('login-alert').innerHTML = "You just goofed! You left something out, try again"
    }else{

      /* retrieve email and password from localStorage */      

      var _user = JSON.parse( localStorage.getItem( '_user') );
      var _email = _user.userEmail;
      var _password = _user.passWord;
     

      /* match enetered email and password with email and password on localStorage*/

      var emailMatch = false;
      var pwdMatch = false;

      /////////////////////////
      
      if(userEmail === _email){
        emailMatch = true;
      }else{
       emailMatch = false;
      }
      if(passWord === _password){
        pwdMatch=true;
      }else{
        pwdMatch=false;
      }

      
      if(emailMatch && pwdMatch){

        pageRedirect();

      }else{
        /* stay on page*/
        document.getElementById('login-alert').className = "alert alert-danger";
        document.getElementById('login-alert').innerHTML = "Invalid credentials, try again"
      }

    }
});
}

/* Redirect*/

function pageRedirect(url){
  var url = "budget.html"
  window.location.href = url;
}