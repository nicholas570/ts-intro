// boolean
var isOld = false;
// number
var age = 4;
// string
var firtsName = 'John';
// array with type
var firtNames = ['Nicolas,', 'Mary', 'Michel'];
// array with generic
var lastNames = ['lala', 'lolo', 'lulu'];
// tuple: array with a fixed number of typed elements
var x;
x = ['hello', 45, 'John'];
var y = x[1];
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var green = Color[1];
// any
var address = 'whatever';
// void
var sayHello = function () {
    console.log('hello');
};
sayHello();
