// Creating a very simple function to demonstrate its big-O

const casts = ['gill', 'hank', 'darla', 'bloat', 'nigel', 'squirt', 'nemo', 'dori', 'bruce', 'marlin'];

function findNemo(array) {
  // Measuring the runtime of our function
  let time0 = performance.now();

  // Looping through array and checking each item for a match 
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found Nemo!!!!');
    }
  }

  // Measuring the runtime of our function
  let time1 = performance.now();

  // Storing the runtime in a variable
  let runTime = time1 - time0;

  console.log(`It took ${runTime} milliseconds to fine Nemo`) 
}

findNemo(casts) 

console.log('--------------')


// ---------- Interview question ------------
// Create a function that reverses a string

// my brute approach: 

// creating function with a function declaration
function reverseString(str) {
  // It's always a good idea to check the input
  if (typeof str !== 'string' || str.length < 2 ) {
    return 'Houston? We have a problem...'
  }

  // splitting the string into an array and assigning the result to an array
  let strToArray = str.split('')

  // creating an empty array to store the reverse of strToArray
  let reversedArray = [];

  // looping through the strToArray and pushing its items into reversedArray in reverse
  for (let i = strToArray.length -1; i >= 0; i--) {
    reversedArray.push(strToArray[i])
  }
  
  // turing reversedArray into a string and storing into a new variable
  let backwardString = reversedArray.join('')
  

  return backwardString;
  
}
// This above function has a time complexity of O(n)

console.log(reverseString('w')) 



// The above is ,of course, the brute approach and also an attempt to be as verbose as possible. I can refactor it to be more concise using built-in methods.

const conciseStringReversal = (string) => string.split('').reverse().join('');

console.log(conciseStringReversal('Is this the right thing?'))