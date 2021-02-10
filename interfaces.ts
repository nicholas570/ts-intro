const obj = { size: 10, label: 'Size 10 object' };

const printLabel = (labeledObj: { label: string }): void => {
  console.log(labeledObj.label);
};

printLabel(obj);

// with interface

interface LabeledValue {
  label: string;
}

const printLabel2 = (labeledObj: LabeledValue): void => {
  console.log(labeledObj.label);
};

printLabel2(obj);

// optional properties
interface SquareConfig {
  color?: string;
  width?: number;
}

// readonly properties
interface Point {
  readonly x: number;
  readonly y: number;
}

let point: Point = { x: 10, y: 30 };
// point.x = 12; => error

let arr: ReadonlyArray<number> = [1, 2, 43];
// arr[0] = 4; => error;
// arr.push(12); => error

// functions interfaces

// function must take 2 arguments of type number and return a boolean
interface func {
  (param1: number, param2: number): boolean;
}

const isEven: func = (a, b) => {
  return (a * b) % 2 === 0;
};

// isEven('hello', 4); => error
isEven(3, 5);

// Array interfaces
interface StringArray {
  [index: number]: string;
}

const myArray: StringArray = ['Bob', 'Fred'];

let myStr: string = myArray[0];
