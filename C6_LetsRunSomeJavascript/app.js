var a = 1;
var b = 2;
var c = a + b;

console.log(c);

function greet() {
    console.log('hi');
}
greet();

function logGreeting(fn) {
    fn();
}

logGreeting(greet);

var greetMe = function() {
    console.log('Hi Tony');
}
greetMe();

logGreeting(greetMe);

logGreeting(function() {
    console.log('Hello Tony');
});