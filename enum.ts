// NUMERIC ENUM
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

// Direction['Up'] => 0
// Direction[0] => Up

enum Direction2 {
  Up = 1,
  Down,
  Left,
  Right,
}

// Direction2[1] => Up
// Direction2[2] => Down

// STRING ENUM
enum Points {
  North = 'NORTH',
  East = 'EAST',
  South = 'LEFT',
  West = 'WEST',
}

console.log(Points.East);
