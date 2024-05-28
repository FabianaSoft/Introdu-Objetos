//string

const str: string = 'Hello, world!';
console.log(typeof str);

//number
const num: number = 1;
console.log(typeof num);

//boolean
const bool: boolean = true;
console.log(typeof bool);

//array
const arr: number[] = [1, 2, 3];
console.log(typeof arr);

//interface
interface Obj {
  name: string;
  age: number;
}
const obj: Obj = { name: 'John', age: 30 };
console.log(typeof obj);

//type
type MyType = string;
const myType: MyType = 'Hello, world!';
console.log(typeof myType);

const pessoa: Obj = { name: 'Fabiana', age: 44 };

const maiorIdade: string = pessoa.age >= 18? 'Maior de idade' : 'Menor de idade';
console.log(maiorIdade);

function tudoMaiusculo(palavra: string): string {
  return palavra.toUpperCase();
}

console.log(tudoMaiusculo(pessoa.name));
