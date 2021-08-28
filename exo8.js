// qs1
console.log("");

function myName (name){
  
  return name
}

console.log(myName("khaled"))


console.log(myName("mehrez"))


// qs2
function fullName(firstName, lastName){
  retun (`${firstName} ${lastName}`)
}

console.log("khaled", "saoud")

// qs3

function addNumbers(num1,num2){
  let sum = num1 + num2
  return sum
}
console.log(addNumbers(5,8))
console.log(addNumbers(32,10))
console.log(addNumbers(65,8))
console.log(addNumbers(5,36))
console.log(addNumbers(46,8))
console.log(addNumbers(10,8))
console.log(addNumbers(63,40))

// qs4

function perimeterOfRectangle(length, width){
  return 2 * (length + width)
}

console.log(perimeterOfRectangle(23, 15))

// qs5

function volumeOfRectPrism( length ,width ,height){
  return length * width * height
}

console.log(volumeOfRectPrism(24, 10, 36))

// qs6

function areaOfCircle (r){
  return Math.PI * r *r
}

console.log(areaOfCircle(10))

// qs7

function bmi (weight, height){
  let bmi = weight / (height* height)
  if (bmi < 18.5) {
    console.log("underweight")
  }
  else{
    if (bmi >=18.5 && bmi <=24.9) {
      console.log("normal weight")
    }
    else{
      if (bmi >=25 && bmi <=29.9) {
        console.log("overweight")
      }
    
      else{
        console.log("obese")
      }
    }
  } 
  

}

console.log(bmi(78,1.76))