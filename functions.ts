const add = (x, y) => x + y; //js

// ts : add takes 2 number args and return a number
const add2: (baseValue: number, increment: number) => number = (x, y) => {
  return x + y;
};

function add2_2(x: number, y: number): number {
  return x + y;
}
add2(3, 5);
add2_2(3, 5);

// or with an interface
interface addFunc {
  (x: number, y: number): number;
}

const add3: addFunc = (x, y) => x + y;
console.log(add3(4, 6));

const buildName: (fistName: string, lastName?: string) => string = (fn, ln) => {
  if (ln) return fn + ' ' + ln;
  return fn;
};

console.log(buildName('john', 'doe'));
console.log(buildName('john'));

interface Person {
  firstName: string;
  lastName: string;
}

interface PersonFunc {
  (fn: string, ls: string, ...rest: object[]): Person;
}

const personConstructor: PersonFunc = (firstName, lastName, ...options) => {
  return {
    firstName,
    lastName,
    options,
  };
};

console.log(
  personConstructor('Lucy', 'Smith', { age: '34' }, { gender: 'female' })
);
