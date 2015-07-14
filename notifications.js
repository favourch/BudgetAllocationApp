//calculate the allocations as a percentage of the budget amount
//calculate the balance of the budget amount

window.onload = function(){
  greeting();
  fetchPercentage();
 // foo();
}

//fetch the name of the user from localstorage and display it as a greeting on this page 'Hello, user_name'
function greeting(){
var user_name = JSON.parse( localStorage.getItem( '_user') );
document.getElementById("greeting").innerHTML = "hello, " + user_name.firstName;
}

//fetches the percentages and balances
function fetchPercentage(){
  var allocationPercentage= JSON.parse( localStorage.getItem('_allocation'));
  var budgetBal = JSON.parse(localStorage.getItem('_budget'));
  var percentageUsed = ((100*_allocation.allocationAmount)/_budget.budgetAmount);

  document.getElementById('percentage').innerHTML = "ojigbiji"
  document.write = "ojigbiji;
}



///////////////////////////////////////////////////////////////////
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

//instantiate a new allocation and pass the title and other relevant detail about the user and amount to localstorage
function createAllocation(){
var allocationTitle = document.getElementById('InputAllocationName').value;
var allocationAmount = document.getElementById('InputAllocationAmount').value;
allocationAmount = parseInt(allocationAmount);
var allocationNotes = document.getElementById('InputAllocationMessage').value;
if(allocationTitle === ""){
  var user_name = JSON.parse( localStorage.getItem( '_user') );
  console.log(user_name.firstName + ", " + "Something just doesnt seem right. Fix it!");
  var _name_ = user_name.firstName;
}

// save allocation data to localStorage
else{
var _allocation = {};
_allocation.activeuser= _name_;
_allocation.allocationTitle= allocationTitle;
_allocation.allocationAmount = allocationAmount;
_allocation.allocationNotes = allocationNotes;



localStorage.setItem( '_allocation', JSON.stringify(_allocation) );

window.location.href = "notifications.html";


foo();

}}