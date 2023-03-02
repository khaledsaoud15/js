const hahdhbdkjqbkf = "4";

console.log(+hahdhbdkjqbkf);

if (5 + 5 == 10) {
  console.log(true);
}

5 + 5 !== 10 ? console.log(true) : console.log(false);

const age = 21;

console.log("he is " + age);

console.log(`he is ${age}`);

const arr = [1, "s", { h: "o" }, 15, 5, 6];

// arr.forEach(function (a) {
//   console.log(a);
// });

// arr.map((b) => {
//   console.log(b);
// });

console.log(arr[0]);

const [f, s, t] = arr;

console.log(t);

const arr2 = ["first array", ...arr];
console.log(arr2);

const array1 = [];

// 0 + 1 + 2 + 3 + 4
const initialValue = [];
const sumWithInitial = array1.reduce((prev, curr) => prev + curr, initialValue);

console.log(sumWithInitial);
