window.onload = function(){
  greeting();
}


function greeting(){
 // var nickName = JSON.parse( localStorage.getItem( '_user', 'firstName' ) );
//console.log(_user);

 var nickName = JSON.parse( localStorage.getItem( '_user') );

for(d in nickName){
  console.log(nickName.firstName)
}
document.getElementById("greeting").innerHTML = "hello, " + nickName.firstName;
}


