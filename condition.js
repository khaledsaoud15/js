// const user = parseInt(prompt("enter a number"));

// if (typeof user === "number" && user % 2 === 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

/* 
Print num1 is the largest if num1>num2.
Print num2 is the largest if num1<num2.
Else print num1 and num2 are equal when num1==num2.
*/

// function myFunction(y) {
//   return y + y;
// }

// console.log(myFunction(10));
// console.log(myFunction(15));
// console.log(myFunction(2));
// console.log(myFunction(1));
// name = "khaled"; //;

/*
Print “Equilateral triangle.” if values for all side1, side2 and side3 are equal.
Print “Isosceles triangle.” if values for side1 is equal to side2 or side2 is equal to side3
Else “Scalene triangle.” since values of all sides are unequal.*/

/*
Print result of num1+num2 if operation is “add”
Print result of num1-num2 if operation is “subtract”
Print result of num1*num2 if operation is “multiply”
Print result of num1/num2 if operation is “divide”
Print result of num1%num2 if operation is “modulus”
Else print “Invalid operation”
*/

/*
Print “S grade” if marks is between 90 and 100.
Print “A grade” if marks is between 80 and 90.
Print “B grade” if marks is between 70 and 80.
Print “C grade” if marks is between 60 and 70.
Print “D grade” if marks is between 50 and 60.
Print “E grade” if marks is between 40 and 50.
Print “Student has failed” if marks is between 0 and 40.
Else print “Invalid marks”.*/

// function calcTrianglr(side1, side2, side3) {
//   if (side1 === side2 && side2 === side3) {
//     return "“Equilateral triangle.”";
//   } else if (side1 === side2 && side2 !== side3) {
//     return "“Isosceles triangle.”";
//   } else {
//     return "“Scalene triangle.”";
//   }
// }

// console.log(calcTrianglr(10, 10, 5));
// console.log(calcTrianglr(10, 10, 10));
// console.log(calcTrianglr(5, 2, 4));

function calc(operation, num1, num2) {
  if (operation === "add") {
    return num1 + num2;
  } else if (operation === "sub") {
    return num1 - num2;
  } else if (operation === "mult") {
    return num1 * num2;
  } else if (operation === "divide") {
    return num1 / num2;
  } else if (operation === "modules") {
    return num1 % num2;
  } else {
    return "invalid operation";
  }
}

function mark(n) {
  switch (true) {
    case n >= 90 && n < 100:
      return "S grade";
    case n >= 80 && n < 90:
      return "A grade";
    case n >= 70 && n < 80:
      return "B grade";
    case n >= 60 && n < 70:
      return "C grade";
    case n >= 50 && n < 70:
      return "D grade";
    case n >= 40 && n < 50:
      return "E grade";
    case n >= 00 && n < 40:
      return "Student has failed";
    default:
      break;
  }
}

console.log(mark(90));

/*
- Write a script that prompt the user to enter base and height of the triangle and calculate an area of a 
  triangle (area = 0.5 x b x h).
- Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate 
  the perimeter of triangle (perimeter = a + b + c).
- Get length and width using prompt and calculate an area of rectangle (area = length x width) and the perimeter 
  of rectangle (perimeter = 2 x (length + width)).
- Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle 
  (circumference = 2 x pi x r) where pi = 3.14.
*/

function area(h, b) {
  return 0.5 * h * b;
}
console.log(area(5, 4));

function perimeter(s1, s2, s3) {
  return s1 + s2 + s3;
}
console.log(perimeter(5, 8, 10));

function rectangle(l, w) {
  return 2 * (l + w);
}

console.log(rectangle(12, 15));

function radius(pi, r) {
  return 2 * pi * r;
}
console.log(radius(2, 3.14, 12));
