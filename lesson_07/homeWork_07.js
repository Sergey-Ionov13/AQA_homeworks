// 1
function getFriday13thCount(startDate, endDate = Date.now()) {

    let start = new Date(startDate);
    let end = new Date(endDate);
    let daysCount = 0;

    for (let i = +start; i <= +end; i += 1000*3600*24) {

        let iDate = new Date(i);

        if (iDate.getDate() === 13 && iDate.getDay() === 5) daysCount++;
    }

    return daysCount;
}

// 2

function compareNumbersSum(numberInStr) {

    function isArrayHalvesEqual(arr) {

        let num1 = numberInStr
            .slice(0, numberInStr.length / 2)
            .split('').reduce((sum, currentValue) => sum + Number(currentValue), 0);
        let num2 = numberInStr
            .slice(numberInStr.length / 2, numberInStr.length)
            .split('').reduce((sum, currentValue) => sum + Number(currentValue), 0);

        return num1 === num2;
    }

    return numberInStr.length >= 6 && isArrayHalvesEqual(numberInStr) ? 'да' : 'нет';
}

// 3

function getArithmeticAverage(numbersArray) {

    return numbersArray.reduce((sum, currentValue) => sum + currentValue, 0) / numbersArray.length;
}
