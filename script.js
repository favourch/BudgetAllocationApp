
/*Andela BootCamp Class X 
Project: Budget Allocation App
*/

(function(){

//define a user object
var user_ = function(firstName, lastname,email,password){
  this.firstName = firstName;
  this.lastname= lastname;
  this.email= email;
  this.password= password;

  //this method stores a new user details as an object containing the user details in localstorage
  var addUser = function(){

  }

  //this method retrieves user info from localstorage
  var getUser = function(firstName){
  var username = localstorage.getItem('firstName');
  return username;
  }
}

if(window.location="budget.html"){
  var newuser = new user_();
  newuser.username;
  document.getElementById('greeting').innerHTML=username;
}



});

   