// Selecting from Many Options with Switch Statements

/* 
If you need to match one value against many options, you can use a switch
statement. A switch statement compares the value to the case statements which
define various possible values. Any valid JavaScript statements can be
executed inside a case block and will run from the first matched case
value until a break is encountered.

Here is an example of a switch statement:

switch (fruit) {
  case "apple":
    console.log("The fruit is an apple");
    break;
  case "orange":
    console.log("The fruit is an orange");
    break;
}
case values are tested with strict equality (===). The break tells JavaScript to stop executing statements. If the break is omitted, the next statement will be executed.
*/

/* 
Write a switch statement which tests val and sets answer for the following conditions:
1 - alpha
2 - beta
3 - gamma
4 - delta 
*/

function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
     switch (val){
        case 1:
          answer = "alpha";
          break;
        case 2:
          answer = "beta";
          break;
        case 3:
          answer = "gamma";
          break;
        case 4:
          answer = "delta";
          break;
      }
    // Only change code above this line
    return answer;
  }
caseInSwitch(1);