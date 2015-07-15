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
    
  }

  // save data to localStorage
  else {
    var budget = {};
    budget.activeuser = user_name.firstName;
    budget.budgetTitle = budgetTitle;
    budget.budgetAmount = budgetAmount;
    budget.budgetNotes = budgetNotes;

    var cummAllocations = {};
    cummAllocations.bal = 0;

    localStorage.setItem('budget', JSON.stringify(budget));
    localStorage.setItem('cummAllocations', JSON.stringify(cummAllocations));

    //window.location.href = "allocation.html";

    alertUser("alertMsg","Nice! you just created a budget titled " + budgetTitle + " now go ahead and create allocations.");
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
  document.getElementById(id).className = "alert alert-success";
  document.getElementById(id).innerHTML = msg;
}