// 4.Write a JavaScript program to find the sum of squares of the elements of an array

function sumOfSquares(arr) {
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i] * arr[i]; 
    }
  
    return sum;
  }
  
  // Example array
  const numbers = [1, 2, 3, 4, 5];
  

  const result = sumOfSquares(numbers);
  
  console.log("Sum of squares:", result); 
  