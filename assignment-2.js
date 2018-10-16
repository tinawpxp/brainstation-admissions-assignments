
//CHALLENGE 1- 
//Did some research and found that there is such a thing as the makeLine function in JS
which makes a line of sterisks; this is a good starting point to create a new function that
let's me build a triangle to stack these lines 

//the makeLine fxn creates a line of * for a given length 

function makeLine(length) {
  var line = "";
  for (var j = 1; j <=length; j++) {
    line += "* ";
    }
    return line + "\n";
    }
    
// I declared the triangle as a variable, and initialized it as an empty string "". Then I
added a loop that adds a new line with one extra * every time it iterates, and used a for 
statement for this purpose since I want the asterisks to reach a certain length (max width
of the triangle) and repeat until that limit is reached; I started var x=1 because the
triangle starts with a single *, and the length (technically width) of the triangle is set
at x <= length because it needs to have a number of * that is equal to the width- this
indicates that once the x is < or = to the length (technically width), the function will STOP
and the triangle will have been formed; the x++ comes from the fact that for each subsequent 
line, only one more * is added than the line before; triangle += makeLine(x) indicates that 
at first the triangle is empty, but then once the loop starts, since x is set to 1 and I call
the makeLine function, 1 * is added to each progressive line before moving to the next line;
after the number of loops indicated by the (length) has been completed, the triangle is formed 
as a string of *'s. 

function buildtri(length) {
  var triangle = "";
  for (var x = 1; x <= length; x++){
    triangle += makeLine(x);
    }
    return triangle;
}

//testing the code 
//console.log(buildtri(7)

//CHALLENGE 2 

function isEven(value) {
  if (isNaN(value)) {
  return "please enter valid number";
  }
  
	if (value%2 === 0 ) {
		return "the number is even";
	else
		return "the number is odd";
}

//will return "please enter valid number" if fed something that is not a number 




