# BudgetAllocationApp a.k.a Bug.iT

##Description
This simple budget allocation app helps you create a budget, add allocations to that budget and shows the user the balances of the budget as a percentage of allocations on it.

#App Details
USER INTERFACE:
* Boostrap
* Font awesome

STORAGE:
LocalStorage

LANGUAGE:
Vanilla Javascript

RECOMMENDED BROWSER:
Chrome


##Flow
 * user creates a user account or signs in - user credentials (name, email, password) and stored in localStorage
 * user is redirected to budget creation interface - user's name is retrieved from localStorage and displayed as a greeting string on the budget creation page.
 * if budget creation was successful, user is redirected to notifications interface if no success error message is displayed and user action is required
 * On successful creation of a budget, budget details (title, amount, user) are stored in localStorage as a budget object
 * when the user is on the notifications page, the balances on the budget are calculated and displayed as a percentage of the allocations created on it. 
 ** when 100% of the budget is used up, user cannot make further allocations.

##Photo Credit
Logo created by Temi Amodu (Andela Class X)
