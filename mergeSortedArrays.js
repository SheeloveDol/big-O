// The goal is to merge two sorted arrays and have the new array sorted too
// mergeSortedArrays([4,7,10, 25], [5, 9, 15, 80, 91])
// returns [4, 5, 7, 9, 10, 15, 25, 80, 91]


// defining function 
const mergeSortedArrays = (array1, array2) => {

  // Checking inputs
  if (array1 === [] && array2 !== []) {
    return array2;
  } else if (array2 === [] && array1 !== []) {
    return array1
  }

  // creating a new array to push the contents of both arrays into
  let mergedArray = [];

  // using spread operator to merge both arrays into new one, then sorting it
  return mergedArray = [...array1, ...array2].sort()
}

// O(n)

const firstArray = [1,3,5,7,9];
const secondArray = [2,4,6,8,];
const emptyArray = []

console.log(mergeSortedArrays(firstArray, secondArray));

console.log("-------------");


