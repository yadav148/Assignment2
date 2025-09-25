
let x = Number(prompt("enter 1st number :"));
let y = Number(prompt("enter 2nd number :"));
console.log("Before swapping: x =", x, ", y =", y);

let temp = x;
x = y;
y = temp;

console.log("After swapping: x =", x, ", y =", y);