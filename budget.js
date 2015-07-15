var counter = 0;

window.onload = function(){
  greeting();
 // foo();
}



//fetch the name of the user from localstorage and display it as a greeting on this page 'Hello, user_name'
function greeting(){
var user_name = JSON.parse( localStorage.getItem( '_user') );
document.getElementById("greeting").innerHTML = "hello, " + user_name.firstName;
}



//instantiate a new budget and pass the title and other relevant detail about the user and amount to localstorage
function createBudget(){

// console.log(budgetTitle + ", " + typeof (parseInt(budgetAmount)));

var budgetTitle = document.getElementById('InputBudgetName').value;
var budgetAmount = document.getElementById('InputAmount').value;
budgetAmount = parseInt(budgetAmount);
var budgetNotes = document.getElementById('InputMessage').value;
if(budgetTitle === ""){
  var user_name = JSON.parse( localStorage.getItem( '_user') );
  console.log(user_name.firstName + ", " + "Something just doesnt seem right. Fix it!");
  var _name_ = user_name.firstName;
}

// save data to localStorage
else{
var _budget = {};
_budget.activeuser= _name_;
_budget.budgetTitle= budgetTitle;
_budget.budgetAmount = budgetAmount;
_budget.budgetNotes = budgetNotes;

var _notifications = {};
_notifications.budgetTitle = budgetTitle;
_notifications.budgetAmount = budgetAmount;

localStorage.setItem( '_budget', JSON.stringify(_budget) );
localStorage.setItem( '_notifications', JSON.stringify(_notifications) );
window.location.href = "notifications.html";

foo();

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

function foo() {
  counter = counter + 1;
  //document.getElementById('counter').innerHTML = ""
  document.getElementById('counter').innerHTML =counter;
}
