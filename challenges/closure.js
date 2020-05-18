// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


// const external = "I'm outside the function";

// function myFunction() {
//  console.log(external);
//  const internal = "Hello! I'm inside myFunction!";

//  function nestedFunction() {
//    console.log(internal);
//  };
//  nestedFunction();
// }
// myFunction();

// Explanation: 

// The nested function is asking for code that is outside its code-block - I have found that
// You can reference code outside the code block but not inside that codeblock (from outside) - so if 
// for example myFunction() wanted to use the variable internal as an argument it would give an error 
// as it is inside a scope that myFunction does not have access to. I like to think of it as above and below
// levels of access. below can access above but above cannot access below. 


/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */


function counter(number) {
  let count = [];
  for (let i=0; i<=number; i++)
  count.push(i)
  let sum = count.reduce(function(a, b){
  return a + b;
  }, 0);
  return sum
}

console.log(counter(4));