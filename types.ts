// boolean
let isOld: boolean = false;
// number
let age: number = 4;
// string
const firtsName: string = 'John';
// array with type
const firtNames: string[] = ['Nicolas,', 'Mary', 'Michel'];
// array with generic
const lastNames: Array<string> = ['lala', 'lolo', 'lulu'];
// tuple: array with a fixed number of typed elements
const x: [string, number, string] = ['hello', 45, 'John'];
const y: number = x[1];
// enum
enum Color {
  Red,
  Green,
  Blue,
}
const c: Color = Color.Green;
const green: string = Color[1];
// any
const address: any = 'whatever';
// void
const sayHello = (): void => {
  console.log('hello');
};
sayHello();
