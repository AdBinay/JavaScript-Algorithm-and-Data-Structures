//  Nesting For Loops

/*If you have a multi-dimensional array, you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays. Here is an example:

const arr = [
  [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
This outputs each sub-element in arr one at a time. Note that for the inner loop, we are checking the .length of arr[i], since arr[i] is itself an array.

Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.

*/

function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for(let i = 0; i< arr.length; i++){
      for (let j = 0; j < arr[i].length; j++){
        product *= arr[i][j];
      }
    }
    // Only change code above this line
    return product;
}
  
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);