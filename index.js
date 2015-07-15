//*SignUp, SignIn and Redirect and error alerts*/

document.getElementById("btn-signup").addEventListener("click", signUp);
document.getElementById("btn-signin").addEventListener("click", signIn);


/* SignUp */

function signUp(){
  var userEmail = document.getElementById('email').value;
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var passWord = document.getElementById('password').value;
  var pwdMatch = document.getElementById('re-enterpwd').value;

    if(userEmail === "" || firstName === "" || lastName === "" || passWord === ""){
      alertUser("message","You just goofed! You left something out, try again");
    }else if(pwdMatch !== passWord){
      alertUser("message","Sparky, your password didnt match, try again.")
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

}


/*SignIn */

function signIn(){
  var userEmail = document.getElementById('login-username').value;
  var passWord = document.getElementById('login-password').value;

    if(userEmail === "" || passWord === ""){
      alertUser("login-alert", "You just goofed! You left something out, try again")
    }else{

      /* retrieve email and password from localStorage */      
      
          var _user = JSON.parse( localStorage.getItem( '_user') );

          if(_user !== null && _user !=='undefined'){
          var _email = _user.userEmail;
          var _password = _user.passWord;}else{
          alertUser("login-alert","Oops sorry your budget is used up!")
          }

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
        alertUser("login-alert","Invalid credentials, try again")
      }

    }

}


/* Redirect*/

function pageRedirect(url){
  var url = "budget.html"
  window.location.href = url;
}


/* alert user */
function alertUser(id, msg){
  var msg = msg;
  var id = id;
  document.getElementById(id).className = "alert alert-danger";
  document.getElementById(id).innerHTML = msg;
}