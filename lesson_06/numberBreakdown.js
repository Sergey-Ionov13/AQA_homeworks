////////////////////----- 2 -----\\\\\\\\\\\\\\\\\\\\

let givenNumber = 15;
let splitIntoIntegers = true;
let splitCount = 3;
let resultNumbers = [];

for (let i = givenNumber, j = splitCount - 1; j > 0; j--) {
    let num = splitIntoIntegers
        ? Math.floor(Math.random() * (i - j) + 1)
        : Math.floor((Math.random() * (i - (j + 1)) + 1) * 100) / 100;

    i = Math.floor((i - num) * 100) / 100;
    resultNumbers.push(num);
}

resultNumbers.push(Math.round(givenNumber * 100 - resultNumbers.reduce((sum, currentValue) => sum + currentValue, 0) * 100) / 100);

console.log(`
Given number = ${givenNumber}
Breakdown count = ${splitCount}
Result numbers = ${resultNumbers}
`);
