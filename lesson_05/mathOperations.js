// 1

// string + boolean
console.log('str' + true);
// string + number
console.log('str' + 13);
// number + boolean
console.log(13 + true);

// 2

// string * boolean
console.log('str' * true);
console.log('13' * true);
console.log('13' * false);
// string * number
console.log('str' * 13);
console.log('13' * 13);
// number * boolean
console.log(13 * true);
console.log(13 * false);

// 3

// string / boolean
console.log('str' / true);
console.log('13' / true);
console.log('13' / false);
// string / number
console.log('str' / 13);
console.log('13' / 13);
// number / boolean
console.log(13 / true);
console.log(13 / false);

// 4

// to number
console.log(Number(true));
console.log(Number('13'));
console.log(Number('x'));

// to string
console.log(String(true));
console.log(String(13));

// to boolean
console.log(Boolean(13));
console.log(Boolean(0));
console.log(Boolean(' '));
console.log(Boolean(''));
