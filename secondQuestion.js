// 2. Write a JavaScript program to find the most frequent item of an array

let arr = [ 
    1, 1, 3, 5, 7, 6, 8, 5, 6, 4, 
    7, 6, 0, 2, 1, 6,6,1, 8, 9, 5, 
  ];
  
  arr.sort((a, b) => a - b);
  
  let max = 0;
  let mostFrequent;
  let current = 1;
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      current++;
    } else {
      if (current > max) {
        max = current;
        mostFrequent = arr[i - 1];
      }
      current = 1;
    }
  }
  
  // Check the last element's frequency
  if (current > max) {
    max = current;
    mostFrequent = arr[arr.length - 1];
  }
  
  console.log(`The most frequent item is: ${mostFrequent}`);