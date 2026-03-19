/*

Objective:
In this activity, you will reinforce the skill of creating and using variables
while practicing best practices in variable naming conventions through a hands-on,
interactive coding challenge.

The code snippet below may include:
  - Ambiguous or incorrect variable names.
  - Missing variables that need to be created.
  - Scenarios that require the use of clear and descriptive variable names.

You will:
  - Identify Issues: Review the provided code and identify any variable names that:
  - Are unclear or too vague (e.g., a, b, c).
  - Do not follow best practices (e.g., camelCase, descriptive naming).
  - Refactor the Code: Rename the variables and rewrite the program using descriptive names that clearly convey the variable's purpose.
  - Enhance the Program: Add at least two additional variables to improve the program’s functionality or clarity.

Things to reflect on:
  - Why is it important to use meaningful variable names?
  - What are the common pitfalls to avoid when naming variables?
  - How do clear variable names benefit team collaboration?
  
*/

/*
let a = "Alice";
let b = 5;
let c = 20;
let d = a + " bought " + b + " items for $" + c + ".";

console.log(d);

let a = "Alice";
let b = 5;
let c = 20;
let d = a + " bought " + b + " items for $" + c + ".";

console.log(d);

/* 
The first thing I noticed is that a,b,c,and d should all have descriptive names - so it would look something like this: 

let shopperName = "Alice";
let numofItems = 5;
let dollarsSpent = 20;
let receiptMsg = shopperName + " bought " + numofItems + " items for $" + dollarsSpent + ".";

console.log(d);

// Now I would attempt to re-write the purchase receipt message (receiptMsg) so it doesn't look so cluttered - something like this - and make sure I am following the camelCase rule: 

let shopperName = "Alice";
let numofItems = 5;
let dollarsSpent = 20;
let receiptMsg = '${shopperName} bought ${numofItems} items for $${dollarsSpent}.';

console.log(receiptMsg);

// Last I will add at least two additional variables, and update existing ones to be even more specific:

let shopperFirstName = "Alice";
let shopperLastName = "Cooper";
let numofItems = 5;
let itemName = "lottery ticket";
let itemCost = 4;
let totalDollarsSpent = 20;
let receiptMsg = '${shopperFirstName} ${shopperLastName} bought ${numofItems} ${itemName}s at $${itemCost} a piece for $${dollarsSpent} total.';

console.log(receiptMsg);
let a = "Alice";
let b = 5;
let c = 20;
let d = a + " bought " + b + " items for $" + c + ".";

console.log(d);

// The first thing I noticed is that a,b,c,and d should all have descriptive names - so it would look something like this: 

let shopperName = "Alice";
let numofItems = 5;
let dollarsSpent = 20;
let receiptMsg = shopperName + " bought " + numofItems + " items for $" + dollarsSpent + ".";

console.log(d);

// Now I would attempt to re-write the purchase receipt message (receiptMsg) so it doesn't look so cluttered - something like this - and make sure I am following the camelCase rule: 

let shopperName = "Alice";
let numofItems = 5;
let dollarsSpent = 20;
let receiptMsg = '${shopperName} bought ${numofItems} items for $${dollarsSpent}.';

console.log(receiptMsg);

// Last I will add at least two additional variables, and update existing ones to be even more specific:
*/
let shopperFirstName = "Alice";
let shopperLastName = "Wonderland";
let numofItems = 5;
let itemName = "lottery ticket";
let itemCost = 4;
let totalDollarsSpent = 20;
let receiptMsg = `${shopperFirstName} ${shopperLastName} bought ${numofItems} ${itemName}s at $${itemCost} a piece for $${totalDollarsSpent} total.`;

console.log(receiptMsg);
