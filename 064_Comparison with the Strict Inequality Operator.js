// Comparison with the Strict Inequality Operator

/* The strict inequality operator (!==) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa. The strict inequality operator will not convert data types.

Examples

3 !==  3  // false
3 !== '3' // true
4 !==  3  // true
*/

/* 
Add the strict inequality operator to the if statement so the function will return the string Not Equal when val is not strictly equal to 17
*/

// Setup
function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
testStrictNotEqual(10);