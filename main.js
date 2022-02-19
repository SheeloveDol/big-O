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