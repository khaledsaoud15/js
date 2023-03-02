const javaScript = "Full stack JS track Days Of JavaScript";

console.log(javaScript);
console.log(javaScript.length);
console.log(javaScript.toUpperCase());
console.log(javaScript.toLowerCase());
console.log(javaScript.substring(1, 4));
console.log(javaScript.slice(20));
console.log(javaScript.includes("Script"));
console.log(javaScript.split(" "));

const companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";

console.log(companies.split(", "));

console.log(javaScript.replace("track", "group"));
console.log(javaScript.charAt("15"));
console.log(javaScript.charCodeAt("J"));
console.log(javaScript.indexOf("a"));
console.log(javaScript.lastIndexOf("a"));

const not = "You cannot end a sentence with because because";
console.log(not.indexOf("because"));

console.log(typeof "10" === 10);
console.log(parseFloat("9.8") === 10);
console.log(Math.round(parseFloat("9.8")) === 10);
console.log(Math.floor(Math.random() * 100));
console.log(Math.floor(Math.random() * (100 - 50 + 1)) + 50);
const js = "javascript";

const random = Math.floor(Math.random() * js.length);

console.log(js[random]);
