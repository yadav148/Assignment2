
let original = 12345;
let reversed = 0;
let tempNum = original;

while (tempNum !== 0) {
    let digit = tempNum % 10;
    reversed = reversed * 10 + digit;
    tempNum = Math.floor(tempNum / 10);
}

console.log("Original:", original);
console.log("Reversed:", reversed);