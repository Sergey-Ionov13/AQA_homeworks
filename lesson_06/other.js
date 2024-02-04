////////////////////----- 3 -----\\\\\\\\\\\\\\\\\\\\

let arr = [1,2,3,4,5,6];
console.log('Exercise 3');
console.log(arr.reverse());
console.log(`-----------------------------------------------------------
`);

////////////////////----- 4 -----\\\\\\\\\\\\\\\\\\\\

let arr1 = [3,67,15, 2];
console.log('Exercise 4');
console.log(arr1.sort( (a, b) => a-b ).reverse()[0]);
console.log(`-----------------------------------------------------------
`);

////////////////////----- 5 -----\\\\\\\\\\\\\\\\\\\\

let num1 = 3487;
let num2 = 3794;

let numbersMatchValueAndPosition = 0;
let numbersMatchValueOnly = [];

let num1ToStr = String(num1);
let num2ToStr = String(num2);

for (let i = 0; i < String(num1).length; i++) {
    if (String(num1)[i] === String(num2)[i]) {
        numbersMatchValueAndPosition++;
    }

    for (let j = 0; j < String(num1).length; j++) {
        if (String(num2)[j] === String(num1)[i] && j !== i) {
            numbersMatchValueOnly++;
        }
    }
}

console.log('Exercise 5');
console.log(`
Count of numbers that match in value and position: ${numbersMatchValueAndPosition}
Count of numbers that match only in value: ${numbersMatchValueOnly}
`);
