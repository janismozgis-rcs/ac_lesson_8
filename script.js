var something = 123;
console.log(something);
var someArray = ['foo', 'bar', 'baz'];
console.log(someArray);
console.log(someArray[1]);
console.log('foo' + ' ' + 'bar');

var name = 'Pēteris';
console.log('Hello, ' + name);
var address = 'Varžu dīķis';
var number = 13;
console.log('Hello, my name is ' + name + ', I live in ' + address + ' and my favorite number is ' + number + '!');
console.log(`Hello, my name is ${name}, I live in ${address} and my favorite number is ${number}!`);

var cars = ['zaz', 'gaz', 'uaz', 'maz', 'vaz'];
console.log('5th car is: ' + cars[4]);
console.log('4th car is: ' + cars[3]);
console.log('3rd car is: ' + cars[2]);
console.log('2nd car is: ' + cars[1]);
console.log('1st car is: ' + cars[0]);

console.log('' + 1);
console.log(2 + 1);
console.log('2' + 1);
console.log(1 + '2');
console.log(3.15 + 4.15);
console.log(4.15 + 321);
console.log(1 + true);
console.log(1 + false);
console.log(1 + []);

console.log(5 - 1);
console.log('4444' - 1);
console.log('4444a' - 1);
var someString = '222';
console.log(someString + 123);

console.log(3 * 3);
console.log(10 / 2);
console.log(5 / -0);

console.log(11 % 2);
console.log(10 % 2);
console.log(11 % 3);

console.log(1 > 2);
console.log(3 > 2);
console.log(2 < 2);
console.log(3 >= 3);
console.log(4 <= 3);
console.log('a' > 0);

console.log(5 == 5);
console.log('5' == 5);
console.log('5' == true);
console.log('5' == false);

console.log(4 != 5);
console.log(!true);
console.log(!1);
console.log(!5);
console.log(!-5);
console.log(!0);

console.log(!!123);
console.log(!!'a');

console.log(5 === 5);
console.log('5' === 5);

console.log(4 !== 5);
console.log('5' !== 5);
console.log(5 !== 5);

if (true) {
    console.log('This is true!');
}
if (false) {
    console.log('This is not true');
}
if (true)
    console.log('This is also true');

if (false)
    console.log('This will not show up');
console.log('This will show up');

var number = 6;
if (number > 5) {
    console.log(number + ' is greater than 5');
}

var num1 = 5;
if (num1 > 3) {
    if (num1 < 7) {
        console.log('Number is in the sweet spot!')
    }
}

if (num1 > 3 && num1 < 7) {
    console.log('Number ins in the swwt spot as well!');
}

var num2 = 5;
if (num2 < 6 || num2 > 6) {
    console.log('Number is not 6');
}

var num3 = 5;
var str1 = 'b';

if (num3 == 4 && (str1 == 'a' || str1 == 'b')) {
    console.log('something happened');
}

var str2 = 'foooo';
if (str2 == 'foo') {
    console.log('String is Foo');
} else {
   console.log('String is something else');
}

if (str2 == 'foo') 
    console.log('String is Foo');
else
    console.log('String is something else');

var age = 40;
if (age < 16) {
    console.log('Sorry dude');
} else {
    if (age < 21) {
        console.log('only beer allowed');
    } else {
        console.log('angry party!');
    }
}

if (age < 16) {
    console.log('Sorry dude');
} else if (age < 21) {
    console.log('only beer allowed');
} else {
    console.log('angry party!');
}

var date = 1;

if (date % 2 == 1) {
    console.log('date is odd');
} else {
    console.log('date is even');
}