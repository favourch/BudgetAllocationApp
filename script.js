
/*Andela BootCamp Class X 
Project: Budget Allocation App
*/

//Create new budget or allocation
    document.getElementById("budgetName").addEventListener('blur',function() {
      if(this.length === ""){
        console.log("empty");
      }

});

    document.getElementById("createBudget").addEventListener('click',function() {
    console.log("Success! New budget created");

    //window.location = "my-dashboard.html";
  });

    document.getElementById("createAllocation").addEventListener('click',function() {
    console.log("Success! New allocation created");
  });

   