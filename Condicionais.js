//Uma empresa vai dar reajuste de salario para os funcionarios, mas quer 
//que os novos salarios represetem uma diminuição na diferença desses salarios
//Sendo será aplicado os seguintes percentuais de reajuste.
//Salarios até 1500 receberão 12% de reajuste
//Salarios até 2500 receberão 8% de reajuste
//Salariso até 4500 receberão 4% de reajuste
//Salariso até 8450 receberão 2% de reajuste
//Salariso maiores que 8450 não receberão reajuste

const leitura = require("prompt-sync")();
let salario, novoSalario=0,percReajuste;

salario= Number(leitura("Informe o seu salario: "));
if(salario <= 1500){
    percReajuste= 12;
    novoSalario= salario + (salario/100*percReajuste);
}else if(salario <= 2500){
    percReajuste= 8;
    novoSalario= salario + (salario/100*percReajuste);
}else if(salario <= 4500){
    percReajuste= 4;
    novoSalario= salario + (salario/100*4);
}else if(salario <= 8450){
    percReajuste= 2;
    novoSalario= salario + (salario/100*percReajuste);
}else{
    percReajuste= 0;
    novoSalario= salario;
}

if(percReajuste == 0){
    console.log("Não obteve reajuste");
    
}else
    console.log("O funcionario que tinha o salario "+salario+"R$ após o reajuste de "+percReajuste+"% ficou com "+novoSalario+"R$");
