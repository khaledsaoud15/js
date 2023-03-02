/*const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr.push(1);
// arr.push(2); //add element to the last place of the array
// console.log(arr);

// //removes the last element from the array
// const removedElement = arr.pop();
// console.log(removedElement);
// console.log(arr);

// arr.unshift(5); // adds the elemnt in the start of the array
// arr.unshift(9);
// console.log(arr);

// const removedFirstElement = arr.shift(); //removes the first in the array
// console.log(removedFirstElement);
// console.log(arr);

// console.log(arr[0]);
// console.log(arr[Math.floor(arr.length / 2)]);
// console.log(arr[arr.length - 1]);

//   1. Declare an *empty* array;
// 2. Declare an array with more than 5 number of elements
// 3. Find the length of your array
// 4. Get the first item, the middle item and the last item of the array
// 5. Declare an array called *mixedDataTypes*, put different data types in the array and find the length of the array. The array size should be greater than 5
// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
// 7. Print the array using *console.log()*
// 8. Print the number of companies in the array
// 9. Print the first company, middle and last company
// 10. Print out each company
// 11. Change each company name to uppercase one by one and print them out
// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is *not found*
// 14. Filter out companies which have more than one 'o' without the filter method
// 15. Sort the array using *sort()* method
// 16. Reverse the array using *reverse()* method
// 17. Slice out the first 3 companies from the array
// 18. Slice out the last 3 companies from the array
// 19. Slice out the middle IT company or companies from the array
// 20. Remove the first IT company from the array
// 21. Remove the middle IT company or companies from the array
// 22. Remove the last IT company from the array
// 23. Remove all IT companies

// const mixedDataType = [1, "str", [1, 2], { name: "khaled" }, undefined, true];

// console.log(mixedDataType);
// console.log(mixedDataType.length);

const itCompanies = [
  "Facebook",
  "Oracle",
  "Google",
  "IBM",
  "Amazon",
  "Microsoft",
  "Apple",
];

// console.log(itCompanies);
// console.log(itCompanies.length);
// console.log(itCompanies[0]);
// console.log(itCompanies[Math.floor(itCompanies.length / 2)]);
// console.log(itCompanies[itCompanies.length - 1]);

// function checkCompany(company) {
//   if (itCompanies.includes(company)) {
//     return company;
//   }
//   return "company not found";
// }
// console.log("\n");

// console.log(checkCompany("Microsoft"));
// console.log(checkCompany("Hamoud"));

// function chckDoubleO() {
//   let copy = [];
//   for (let i = 0; i < itCompanies.length; i++) {
//     let count = 0;
//     for (let j = 0; j < itCompanies[i].length; j++) {
//       if (itCompanies[i][j] === "o") {
//         count++;
//       }
//     }
//     if (count > 1) {
//       copy.push(itCompanies[i]);
//     }
//   }
//   return copy;
// }

// console.log(chckDoubleO());

// console.log(itCompanies.sort());
// console.log(itCompanies.reverse());
// console.log(itCompanies.slice(3));
// console.log(itCompanies.slice(0, 4));

console.log(itCompanies);

function removeMiddleCompany(company) {
  for (let i = Math.floor(company.length / 2); i < company.length; i++) {
    company[i] = company[i + 1];
    if (i === company.length - 1) {
      company.length = company.length - 1;
    }
  }
  return company;
}

console.log(removeMiddleCompany(itCompanies));

function removeLastCompany(company) {
  for (let i = company.length - 1; i < company.length; i++) {
    company[i] = company[i + 1];
    if (i === company.length - 1) {
      company.length = company.length - 1;
    }
  }
  return company;
}

console.log(removeLastCompany(itCompanies));

itCompanies.length = 0;
console.log(itCompanies);

// -Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.

function dashEven(input) {
  let impres = [];
  let impCtr = input.toString().split("");
  for (let i = 0; i < impCtr.length; i++) {
    impres.push(impCtr[i]);
    if (parseInt(impCtr[i]) % 2 === 0 && parseInt(impCtr[i + 1]) % 2 === 0) {
      impres.push("-");
    }
  }
  return impres.join("");
}
console.log(dashEven(21547));
console.log(dashEven(142547));
console.log(dashEven(514021548554));*/

// -Write a JavaScript program to find the most frequent item in the array

function mostfrequent(input) {
  let compt = 0;
  let temp = 0;
  let result;
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      if (input[i] === input[j]) {
        compt++;
      }
    }
    if (compt >= temp) {
      temp = compt;
      result = input[i];
    }
    compt = 0;
  }

  return result;
}
console.log(mostfrequent([3, 3, 3, 4, 4, 4]));

// remove all the elements after #
// test case => input => "www.google.come#about" => output "www.google.com"

// YOUCEF
const noun = "www.google.come#about";
function search(parag) {
  for (i = 0; i < parag.length; i++) {
    if (parag[i] === "#") {
      console.log(parag.slice(0, i));
    }
  }
}
search(noun);

function addNumb(input) {
  let result = [];
  let arr = input.split("");
  console.log(arr);
  for (let i = 0; i < input.length; i++) {
    result.push(parseInt(arr[i]));
    if (parseInt(arr[i]) + 1 !== parseInt(arr[i + 1]) && i < input.length - 1) {
      result.push(parseInt(arr[i]) + 1);
    }
  }
  return result.join("");
}
console.log(addNumb("12357911"));

function pipeFix(numbers) {
  const first = numbers[0];
  const last = numbers[numbers.length - 1];

  const arr = [];
  for (let i = first; i <= last; i++) {
    arr.push(i);
  }
  return arr;
}

console.log(pipeFix([1, 2, 3, 5, 6, 8, 9, 11]));

var a = [1, 2, 4, 5, 8];
var i = a[a.length - 1];

while (a[0] < i--) {
  console.log(i);
  if (!a.includes(i)) {
    var index = a.indexOf(i + 1);
    a.splice(index, 0, i);
  }
}

// you are a farmer you need to save your sheeps from the wolf
// you have an array as an input but be carefull it starts from right to left
// test case if the wof is in the position arr.length - 1 = return "Pls go away and stop eating my sheep"
// else return "Oi! sheep number " + sheepIndex + " !You are about to be eaten by a Wolf" notice that the array starts the right

function checkWolf(arr) {
  const sheepIndex = arr.length - arr.indexOf("wolf") - 1;
  if (sheepIndex === 0) {
    return "Pls go away and stop eating my sheep";
  } else {
    return (
      "Oi! sheep number " + sheepIndex + " !You are about to be eaten by a Wolf"
    );
  }
}

console.log(
  checkWolf(["sheep", "sheep", "sheep", "sheep", "sheep", "sheep", "wolf"])
);
console.log(
  checkWolf(["sheep", "sheep", "sheep", "wolf", "sheep", "sheep", "sheep"])
);

function cehckVowls(vowl) {
  return vowl.replace(/[aeoui]/gi, "");
}

console.log(cehckVowls("What are you a cOmmunist?"));
