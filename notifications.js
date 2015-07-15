/* calculate the allocations as a percentage of the budget amount
calculate the balance of the budget amount */
window.onload = function(){
  greeting();
  fetchBalAndPercentages();
}

/* greeting */
function greeting(){
  var user_name = JSON.parse(localStorage.getItem('_user'));
  document.getElementById("greeting").innerHTML = "hello, " + user_name.firstName;
}

/* Balances and percentages */
function fetchBalAndPercentages(){
  var _calc = JSON.parse( localStorage.getItem('_notifications'));
  var bud = JSON.parse(localStorage.getItem('_budget'));
  var alloBal = JSON.parse(localStorage.getItem('_allocation'));
  var percentageUsed = parseInt((_calc.allocationAmount/bud.budgetAmount) * 100);
  var balInNaira = _calc.BudgetBal;

  console.log(alloBal, "This is alloBal");
  console.log(percentageUsed, "This is percentageUsed");
  console.log(balInNaira, "this is balInNaira");
  console.log(alloBal.oldAllocationAmount, "This is _allocation.oldAllocationAmount..");
  
  alertUser("percentUsed","You have used up " + percentageUsed + "% of your budget");
  alertUser("balInNaira","You have &#x20A6 " + balInNaira + " left." );
}

/* Success Alerts */
function alertUser(id, msg){
  var msg = msg;
  var id = id;
  document.getElementById(id).className = "alert alert-success";
  document.getElementById(id).innerHTML = msg;
}