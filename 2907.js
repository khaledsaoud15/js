// ---------------------------------- Exo 2 -----------------------------------

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
// The sum of these multiples is 23.Finish the solution so that it returns the sum of all the 
// multiples of 3 or 5 below the number passed in.
let sum=0
let EnterNumber =prompt("enter a number")
for(let i=0;i<EnterNumber;i++){
    if(i%3==0 || i%5==0){
        sum += i;
    }


}
console.log(sum)