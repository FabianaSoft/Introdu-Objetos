//string
var str = 'Hello, world!';
console.log(typeof str);
//number
var num = 1;
console.log(typeof num);
//boolean
var bool = true;
console.log(typeof bool);
//array
var arr = [1, 2, 3];
console.log(typeof arr);
var obj = { name: 'John', age: 30 };
console.log(typeof obj);
var myType = 'Hello, world!';
console.log(typeof myType);
var pessoa = { name: 'Fabiana', age: 44 };
var maiorIdade = pessoa.age >= 18 ? 'Maior de idade' : 'Menor de idade';
console.log(maiorIdade);
function tudoMaiusculo(palavra) {
    return palavra.toUpperCase();
}
console.log(tudoMaiusculo(pessoa.name));
