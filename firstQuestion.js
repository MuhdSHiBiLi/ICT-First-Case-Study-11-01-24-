// 1. Write a JavaScript function to get an array and to read the first element of an array. Check whether it is prime or not. 

function isprime(arr) {
  if (arr[0] <= 1) {
    return 0;
  } else {
    for (let i = 2; i <= Math.sqrt(arr[0]); i++) {
      if (arr[0] % i == 0) {
        return 0;
      }

      return 1;
    }
  }
}

let arr = [4, 3, 10, 16, 32];

const prime = isprime(arr);
if (prime) {
  console.log("first element of the array is prime number");
} else {
  console.log("first element the array is not prime number");
}


// 2. Write a JavaScript program to find the most frequent item of an array
