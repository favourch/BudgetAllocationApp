function signUp(){

document.getElementById("btn-signup").addEventListener('click',function() {

  //check email entered
  var userEmail = document.getElementById('email').value;
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var passWord = document.getElementById('password').value;
  var pwdMatch = document.getElementById('re-enterpwd').value;

  if(userEmail === "" || firstName === "" || lastName === "" || passWord === ""){

  //display error
  console.log('Oops, you just goofed! You must have left something out, try again.')
}

else if(pwdMatch !== passWord){
 console.log('Sparky, your password didnt match, try again.')
}

else{
  
// save data to localStorage
var _user = {};
_user.userEmail= userEmail;
_user.firstName = firstName;
_user.lastName = lastName;
_user.passWord = passWord;


localStorage.setItem( '_user', JSON.stringify(_user) );


//console.log(firstName);
pageRedirect();
}
  });
      }

function pageRedirect(url){
  var url = "budget.html"
  window.location.href = url;
}



function signIn()}{
  
}