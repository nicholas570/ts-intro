var add = function (x, y) { return x + y; }; //js
// ts : add takes 2 number args and return a number
var add2 = function (x, y) {
    return x + y;
};
function add2_2(x, y) {
    return x + y;
}
add2(3, 5);
add2_2(3, 5);
var add3 = function (x, y) { return x + y; };
console.log(add3(4, 6));
var buildName = function (fn, ln) {
    if (ln)
        return fn + ' ' + ln;
    return fn;
};
console.log(buildName('john', 'doe'));
console.log(buildName('john'));
var personConstructor = function (firstName, lastName) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    return {
        firstName: firstName,
        lastName: lastName,
        options: options
    };
};
console.log(personConstructor('Lucy', 'Smith', { age: '34' }, { gender: 'female' }));
var createElement = function (button) {
    return document.createElement(button);
};
