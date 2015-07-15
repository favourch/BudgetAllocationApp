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
  var budgetBalances = JSON.parse( localStorage.getItem('budget'));
  var cummBalances = JSON.parse( localStorage.getItem('cummAllocations'));

  var percentageUsed = parseInt((cummBalances.bal/budgetBalances.budgetAmount) * 100);
  var balInNaira = (budgetBalances.budgetAmount-cummBalances.bal);

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