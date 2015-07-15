//var counter = 0;
window.onload = function() {
  greeting();
}
var user_name = JSON.parse(localStorage.getItem('_user'));
//greeting'
function greeting() {
  document.getElementById("greeting").innerHTML = "hello, " + user_name.firstName;
}
document.getElementById("submit").addEventListener("click", createBudget);

//create budget'
function createBudget() {
  var budgetTitle = document.getElementById('InputBudgetName').value;
  var budgetAmount = parseInt(document.getElementById('InputAmount').value);
  var budgetNotes = document.getElementById('InputMessage').value;
  if (budgetTitle === "" || isNaN(budgetAmount)) {
    alertUser("alert-msg", "Something just doesn't seem right " + user_name.firstName + " Fix it!")
    var _name_ = user_name.firstName;
  }

  // save data to localStorage
  else {
    var _budget = {};
    _budget.activeuser = user_name.firstName;
    _budget.budgetTitle = budgetTitle;
    _budget.budgetAmount = budgetAmount;
    _budget.budgetNotes = budgetNotes;
    var _notifications = {};
    _notifications.budgetTitle = budgetTitle;
    _notifications.budgetAmount = budgetAmount;
    localStorage.setItem('_budget', JSON.stringify(_budget));
    localStorage.setItem('_notifications', JSON.stringify(_notifications));
    window.location.href = "allocation.html";
  }
  //console.log(_budget);
}

/* ensure only type of number is enetered in the budget amount box */
function validate(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode(key);
  var regex = /[0-9]|\./;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}

/* alert error message to user */
function alertUser(id, msg) {
  var msg = msg;
  var id = id;
  document.getElementById(id).className = "alert alert-danger";
  document.getElementById(id).innerHTML = msg;
}