const prompt = require("prompt-sync")();

let num1 = Number(prompt("Informe o primeiro numero: "));
let num2 = Number(prompt("Informe o segundo numero: "));
let soma = num1 + num2;

console.log("A soma de "+num1+" + "+num2+" resultou em "+soma);
