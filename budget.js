var budgetTitle = document.getElementById('InputBudgetName').value;
var budgetAmount = document.getElementById('InputAmount').value;
budgetAmount = parseInt(budgetAmount);

window.onload = function(){
  greeting();
}



//fetch the name of the user from localstorage and display it as a greeting on this page 'Hello, user_name'
function greeting(){
var user_name = JSON.parse( localStorage.getItem( '_user') );
for(d in user_name){
  document.getElementById("greeting").innerHTML = "hello, " + user_name.firstName;
}}



//instantiate a new budget and pass the title and other relevant detail about the user and amount to localstorage
function createBudget(){

// console.log(budgetTitle + ", " + typeof (parseInt(budgetAmount)));

if(budgetTitle === "" || budgetTitle.length < 5){
  var user_name = JSON.parse( localStorage.getItem( '_user') );
  console.log(user_name.firstName + ", " + "Something just doesnt seem right. Fix it!");
}}



/* ensure only type of number is enetered in the budget amount box */
function validate(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode( key );
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}



