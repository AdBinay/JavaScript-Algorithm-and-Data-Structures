//  Chaining If Else Statements

/*
if/else statements can be chained together for complex logic.
Here is pseudocode of multiple chained if / else if statements:

if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else if (condition3) {
  statement3
. . .
} else {
  statementN
}
*/

/*
Write chained if/else if statements to fulfill the following conditions:

num < 5 - return Tiny
num < 10 - return Small
num < 15 - return Medium
num < 20 - return Large
num >= 20 - return Huge

*/

function testSize(num) {
    // Only change code below this line
    if (num < 5) {
        return "Tiny";
    }
    else if (num < 10){
        return "Small";
    }
    else if (num < 15){
        return "Medium";
    }
    else if (num < 20){
        return "Large";
    }
    else{
        return "Huge"; 
    }
    // Only change code above this line
  }
 
testSize(7);