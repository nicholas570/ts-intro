var obj = { size: 10, label: 'Size 10 object' };
var printLabel = function (labeledObj) {
    console.log(labeledObj.label);
};
printLabel(obj);
var printLabel2 = function (labeledObj) {
    console.log(labeledObj.label);
};
printLabel2(obj);
var point = { x: 10, y: 30 };
// point.x = 12; => error
var arr = [1, 2, 43];
var isEven = function (a, b) {
    return (a * b) % 2 === 0;
};
// isEven('hello', 4); => error
isEven(3, 5);
