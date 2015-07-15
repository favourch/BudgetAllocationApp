window.onload = function() {
  greeting();
 // checkBudgetBalance();
}

document.getElementById("submit").addEventListener("click", createAllocation);
/* greeting */
function greeting() {
  /* retrieve active user's name from LS and display as a greeting */
  var nickName = JSON.parse(localStorage.getItem('_user'));
  document.getElementById("greeting").innerHTML = "hello, " + nickName.firstName;
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

    var cummBal = JSON.parse(localStorage.getItem('cummAllocations'));
    var NewAllo = cummBal.bal + allocationAmount;

    var allocation = {};
    allocation.activeuser = user_name.firstName;
    allocation.allocationTitle = allocationTitle;
    allocation.allocationNotes = allocationNotes;
    allocation.allocationAmount = allocationAmount;

    var cummAllocations ={};
    cummAllocations.bal = NewAllo;

    /** continue from here */
    
    localStorage.setItem('cummAllocations', JSON.stringify(cummAllocations));
    localStorage.setItem('allocations', JSON.stringify(allocation));

    alertUser("alertSuccess","Nice! you just created a allocation titled " + allocationTitle + " see notifications.");
  }
}


function alertUser(id, msg) {
  var msg = msg;
  var id = id;
  document.getElementById(id).className = "alert alert-success";
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