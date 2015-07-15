window.onload = function() {
  greeting();
  checkBudgetBalance();
}

document.getElementById("submit").addEventListener("click", createAllocation);
/* greeting */
function greeting() {
  /* retrieve active user's name from LS and display as a greeting */
  var nickName = JSON.parse(localStorage.getItem('_user'));
  document.getElementById("greeting").innerHTML = "hello, " + nickName.firstName;
}

/* */
/* retrive budget balance from notifications ls */
/* if the balance < 1 the donot allow further allocations */

function checkBudgetBalance() {
  var bugBal = JSON.parse(localStorage.getItem('_notifications'));
  if (bugBal === null || bugBal === 'undefined' ) {
    alertUser("allocation-alert", "YOU HAVEN'T CREATED A BUDGET YET. CREATE A BUG.IT THEN COME BACK HERE");
  } else if (bugBal.bal < 1) {
    alertUser("allocation-alert", "Oops sorry your budget is used up!")
    document.getElementById('submit').className = "btn btn-hide";
  }
}

/* */
function createAllocation() {
  var allocationTitle = document.getElementById('InputAllocationName').value;
  var allocationAmount = parseInt(document.getElementById('InputAllocationAmount').value);
  var allocationNotes = document.getElementById('InputAllocationMessage').value;
  var user_name = JSON.parse(localStorage.getItem('_user'));
  if (allocationTitle === "") {
    alertUser("allocation-alert", "Something just doesnt seem right. Fix it!")
  }
  // save allocation data to localStorage
  else {
    var _allocation = {};
    _allocation.activeuser = user_name.firstName;
    _allocation.allocationTitle = allocationTitle;
    _allocation.allocationNotes = allocationNotes;
    _allocation.allocationAmount = allocationAmount;
    _allocation.oldAllocationAmount = allocationAmount;
    /* fetch the notifications details created an created budget*/
    var xxn = JSON.parse(localStorage.getItem('_notifications'));
    var budgetName = xxn.budgetTitle;
    var budgetAmt = xxn.budgetAmount;
    var oldBudgetAmt = xxn.budgetAmount;
    var BudgetBal = budgetAmt - _allocation.allocationAmount;
    var _notifications = {};
    console.log(_allocation.allocationAmount, "This is _allocation.allocationAmount");
    console.log(budgetAmt, "this is budgetAmt");
    console.log(BudgetBal, "this is BudgetBal");
    budgetAmt = BudgetBal;
    _notifications.budgetTitle = budgetName;
    _notifications.budgetAmount = budgetAmt;

    _notifications.allocationAmount = allocationAmount;
    _notifications.BudgetBal = BudgetBal - _notifications.allocationAmount;
    // _allocation.allocationAmount = allocationAmount + _notifications.allocationAmount;
    localStorage.setItem('_notifications', JSON.stringify(_notifications));
    /* calculate */
    localStorage.setItem('_allocation', JSON.stringify(_allocation));
    window.location.href = "notifications.html";
    /* notification counter, not working correcty yet */
    /* code here */
    //console.log(_allocation, "this is _allocation");
    //console.log(_notifications, "this is _notifications");
  }
}


function alertUser(id, msg) {
  var msg = msg;
  var id = id;
  document.getElementById(id).className = "alert alert-danger";
  document.getElementById(id).innerHTML = msg;
}


/* ensure only type of number is enetered in the budget amount box */
function validate(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode(key);
  var regex = /[0-9]|\./;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    //if(theEvent.preventDefault) 
    theEvent.preventDefault();
  }
}