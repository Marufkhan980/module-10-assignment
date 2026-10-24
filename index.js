function calculateDifference(a, b) {
  return a - b;
}

function isOdd(num) {
  return num % 2 !== 0;
}

function findMin(arr) {
  return Math.min(...arr);
}

function filterEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}

function sortArrayDescending(arr) {
  return [...arr].sort((a, b) => b - a);
}

function lowercaseFirstLetter(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

function findAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log("Difference:", calculateDifference(10, 4));
console.log("Is 7 odd?", isOdd(7));
console.log("Is 10 odd?", isOdd(10));
console.log("Minimum number:", findMin([5, 2, 9, 1, 7]));
console.log("Even numbers:", filterEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log("Sorted descending:", sortArrayDescending([5, 2, 9, 1, 7]));
console.log("Lowercase first letter:", lowercaseFirstLetter("Hello"));
console.log("Average:", findAverage([10, 20, 30, 40, 50]));
console.log("Is 2024 a leap year?", isLeapYear(2024));
console.log("Is 2023 a leap year?", isLeapYear(2023));