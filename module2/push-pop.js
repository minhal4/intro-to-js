//push of an element

var number = [75,45,50,55];
 number.push(68);
 console.log(number);


// ********************************
 var frnd = ['balam','gelam', 'sovai', 'malam', 'pailam', ]
 frnd.push('tukku');
console.log(frnd);

//use pop to get rid of last pushed element
 var number = [75,45,50,55];
 var element = number.pop();

 console.log(number);
console.log(element);


// push pop from beginning
var number = [75,45,50,55];
number.unshift(1111);
console.log(number);
var element=number.shift();

console.log(number);
console.log(element);