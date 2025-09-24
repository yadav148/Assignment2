
let Num = Number(prompt("enter the number :"));
let factorial = 1;

for (let i = 1; i <= Num; i++) {
    factorial *= i;
}
console.log("Factorial of " + Num + " is " + factorial);