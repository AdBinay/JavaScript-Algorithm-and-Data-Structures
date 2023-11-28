//  Manipulate Arrays With push Method

/*  An easy way to append data to the end of an array is via the push() method.

The push() method takes one or more arguments and appends them to the end of the array,
in the order in which they appear. It returns the new length of the array.

Examples:

const arr1 = [1, 2, 3];
arr1.push(4, 5);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
arr1 now has the value [1, 2, 3, 4, 5] and
arr2 has the value ["Stimpson", "J", "cat", ["happy", "joy"]]. */

// Push ["dog", 3] onto the end of the myArray variable.

// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray.push(["dog", 3]);