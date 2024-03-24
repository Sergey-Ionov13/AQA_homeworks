// 1

Promise.race([
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(1), getRandomNum(1, 5) * 1000);
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(2), getRandomNum(1, 5) * 1000);
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(3), getRandomNum(1, 5) * 1000);
    })
])
    .then((result) => {
        console.log(result);
    });

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

// 2

function getNum(min, max, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(getRandomNum(min, max)), timeout);
    });
}

async function getSquareOfNumber() {
    const result = await getNum(1, 5, 3000);
    const square = result * result;
    console.log(square);
}

getSquareOfNumber();

// 3

async function getSum() {
    const summand1 = await getNum(1, 5, 3000);
    const summand2 = await getNum(6, 10, 5000);
    const sum = summand1 + summand2;
    console.log(sum);
}

getSum();
