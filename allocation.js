window.onload = function(){
  greeting();
  checkBudgetBalance();
}


/* greeting */

function greeting(){
  /* retrieve active user's name from LS and display as a greeting */
  var nickName = JSON.parse( localStorage.getItem( '_user') );
  document.getElementById("greeting").innerHTML = "hello, " + nickName.firstName;
}

/* */
/* retrive budget balance from notifications ls */
/* if the balance < 1 the donot allow further allocations */

function checkBudgetBalance(){
  var bugBal = JSON.parse( localStorage.getItem( '_notifications') );
  if(bugBal.budgetAmount < 1){
    alertUser("allocation-alert","Oops sorry your budget is used up!")
    document.getElementById('submit').className = "btn btn-hide";
  }else{
    document.getElementById("submit").addEventListener("click", createAllocation);
  }

}

/* */

function createAllocation(){
var allocationTitle = document.getElementById('InputAllocationName').value;
var allocationAmount = document.getElementById('InputAllocationAmount').value;
allocationAmount = parseInt(allocationAmount);
var allocationNotes = document.getElementById('InputAllocationMessage').value;
if(allocationTitle === ""){
  var user_name = JSON.parse( localStorage.getItem( '_user') );
  alertUser("allocation-alert","Something just doesnt seem right. Fix it!")
  var _name_ = user_name.firstName;
}

// save allocation data to localStorage
else{
var _allocation = {};
_allocation.activeuser= _name_;
_allocation.allocationTitle= allocationTitle;
_allocation.allocationAmount = allocationAmount;
_allocation.allocationNotes = allocationNotes;
/* here */

/* calculate */

localStorage.setItem( '_allocation', JSON.stringify(_allocation) );

var budgetBalance = JSON.parse( localStorage.getItem( '_notifications') );
var runningBal = (budgetBalance.budgetAmount - allocationAmount);
localStorage.setItem( '_notifications.budgetAmount', JSON.stringify(runningBal) );

window.location.href = "notifications.html";

/* notification counter, not working correcty yet */
/* code here */

}}


function alertUser(id, msg){
  var msg = msg;
  var id = id;
  document.getElementById(id).className = "alert alert-danger";
  document.getElementById(id).innerHTML = msg;
}


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