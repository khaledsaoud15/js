let i = 0;

const letter = "khaled";

// for (i; i <= 8; i++) {
//   if (i == 2) {
//     console.log(i);
//     break;
//   }
// }

// console.log("----------------------------------------------------");

// let k = 0;
// while (k <= 5) {
//   console.log(k);
//   k++;
// }

// console.log("----------------------------------------------------");

// let j = 0;

// do {
//   console.log(j);
//   j++;
// } while (j >= 5);

// Write a JS code to find the power of a number using for loop
//  Write a JS code to print a pattern using for loop
// Write a JS code to find the no of digits in a number
// Write a JS code to calculate the sum of digits in a number

// function powNum(num, pow) {
//   let temp = num;

//   for (let i = 1; i < pow; i++) {
//     num *= temp;
//   }
//   return num;
// }
// console.log(powNum(1, 6));

// function drawPattern(pattern) {
//   for (let i = 0; i < pattern; i++) {
//     let str = "";
//     for (let j = 0; j < i; j++) {
//       str += j;
//     }
//     console.log(str);
//   }
// }

// drawPattern(5);

// console.log("------------------------------------------------------------");

// function calcDigits(str) {
//   let s = str.toString();
//   let newArr = s.split("");
//   console.log(newArr);
//   newArr.push("");

//   let temp;
//   for (let i = 0; newArr[i] != ""; i++) {
//     temp = i;
//   }
//   return temp + 1;
// }

// console.log(calcDigits(1122250));

// function sum(num) {
//   let int = 0;
//   for (let index = 0; index <= num; index++) {
//     int = index + index;
//   }
//   return int;
// }

// console.log(sum(3));

// Using a for loop print all even numbers up to and including n. Don’t include 0.
// Given a string change the every second letter to an uppercase ‘Z’. Assume there are no space.
// Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.

// function calcEven(num) {
//   for (let i = 1; i < num; i++) {
//     if (i % 2 == 0) {
//       console.log(i);
//     }
//   }
// }

// calcEven(10);

// function Capital(str) {
//   for (let i = 0; i < str.length; i++) {
//     if ((i + 1) % 2 === 0) {
//       str = str.replace(str[i], "Z");
//     }
//   }
//   return str;
// }
// console.log(Capital("hahahahah"));

// function checkY(str) {
//   if (str.includes("y")) {
//     return "yes";
//   }
//   return "no";
// }

// console.log(checkY("khaled"));
// console.log(checkY("play"));

var isAnagram = function (test, original) {
  let orTemp = original.replace(/[^\w]/g).toLowerCase().split("").sort().join();
  let temp = test.replace(/[^\w]/g).toLowerCase().split("").sort().join();
  if (temp === orTemp) {
    return true;
  }
  return false;
};

// console.log(isAnagram("kirdun", "dunKir"));

// #1 — Print the ODD numbers from 7 to 31
// #2 — Iterate through all numbers from 1 to 45. Print the following:

// For multiples of 3 print “Fizz”
// For multiples of 5 print “Buzz”
// For multiples of 3 and 5 print “FizzBuzz”

// test case ex1 => --- 9 % 2 !== 0 ===output => 1 (1!=0)

// test case ex2 => --- 3 %3 === 0 output => ("Fizz")
// test case ex2 => --- 10 % 5 === 0 output => ("buzz")
// test case ex2 => --- 15 % 5 && 15 % 3 === 0 output => ("FizzBuzz")

// function caclOdd(index, num) {
//   for (i = index; i <= num; i++) {
//     if (i % 2 !== 0) console.log(i);
//   }
// }

// caclOdd(7, 31);

function fizzBuzz(num) {
  for (let i = 0; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i, "FizzBuzz");
    } else if (i % 3 === 0) {
      console.log(i, "buzz");
    } else if (i % 5 === 0) {
      console.log(i, "fizz");
    }
  }
}

fizzBuzz(45);
