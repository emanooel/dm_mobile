//função normal - usar a palavra function seguido do nome da função
function saudacao(pessoa, idade){
    console.log("Olá "+pessoa + idade)
}


//função anomina - não tem o nome da função, mas tem a palavra "function"
const exibirNota = function (nota){
    console.log("A minha nota eh: " + nota);
}

// arrow fuctions - muda a forma de escrever a função deixa de usar "function"
const somar = (num1,num2) => {
    console.log(num1+num2)
}

const multiplicar = (num1,num2) => num1 * num2;

//Elabore uma função que recebe o peso e altura como parâmetros
// e exiba no console o IMC de qualquer pessoa, 
// faça usando função em modo normal, 
// anonima e arrow function.
// IMC = peso/altura²

const imc = (peso,altura) => {
    return peso/(altura * altura);
}

// let num1 = 10
// let num2 = 87
// const idade = 29
// const nota = 10
// exibirNota(nota)
// saudacao("Emanoel", idade)
// somar(num1,num2)
// console.log(multiplicar(num1, num2))
console.log(imc(75,1.80));