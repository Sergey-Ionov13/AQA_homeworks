// 1

function getFibonacciSeries(num, length) {
    let arr = [];

    for (let i = num; i < num + length; i++) {
        arr.push(fib(i));
    }

    function fib(n) {
        return n <= 1 ? n : fib(n - 1) + fib(n - 2);
    }

    return arr;
}

// 2

function insertItemsInArr(arr, index, insert) {
    // arr.splice(3, 0, ...insert);

    let arr1 = arr.slice(0, index);
    let arr2 = arr.slice(index);

    arr = arr1.concat(insert, arr2);

    return arr;
}

console.log(insertItemsInArr([1, 2, 3, 4, 5], 3, [ 'a', 'b', 'c']));