// Write a function that takes an array of numbers and returns the 
//largest (without using Math.max())---
//Largest wiuthout using map method-- use for loop instead

// test data
// console.log(largest([6, 13, 250, 3])) // => 250
// console.log(largest([3, 5, 2, 8, 1])) // => 8
// console.log(largest([-13, 40, 3, 0, 19, 22])) // => 40

function largest(mainArray) {
    return mainArray.map(function (subArray){
      return subArray.reduce(function (previousLargestNumber, currentLargestNumber) {
        // if (currentLargestNumber > previousLargestNumber) return currentLargestNumber
        // return previousLargestNumber

        return (currentLargestNumber > previousLargestNumber) ? currentLargestNumber : previousLargestNumber;
      },0);
    })[0];
  }
  console.log(largest([[6, 13, 250, 3]]));
  console.log(largest([[3, 5, 2, 8, 1]]));
  console.log(largest([[-13, 40, 3, 0, 19, 22]]));

