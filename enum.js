// NUMERIC ENUM
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
// Direction['Up'] => 0
// Direction[0] => Up
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 1] = "Up";
    Direction2[Direction2["Down"] = 2] = "Down";
    Direction2[Direction2["Left"] = 3] = "Left";
    Direction2[Direction2["Right"] = 4] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2[1]);
// STRING ENUM
var Points;
(function (Points) {
    Points["North"] = "NORTH";
    Points["East"] = "EAST";
    Points["South"] = "LEFT";
    Points["West"] = "WEST";
})(Points || (Points = {}));
console.log(Points.East);
