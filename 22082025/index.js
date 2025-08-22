// Para definir um objeto utilizamos chaves e atribuimos a uma variavel
// E dentro das chaves colocamos os pares chamados de chave e valor. 
// ex: nome: "Emanoel"
const aluno = {
    nome: "Tiago",
    matricula: '20251INN000',
    notas:[],
    semestre: 3,
    endereco:{
        rua:"Av.Jones Santos Neves",
        bairro:"Morro Grande",
        outro_obj:{
            dado:"qualquer"
        }
    },
    atribuir_notas: function (nota){
        this.notas.push(nota)
    },
    uppercase: function(){
        console.log(this.nome.toUpperCase())
    },
    mostrar_endereco: function(){
        console.log(this.endereco)
    }
}
//Para percorrer um objeto.
for(let chave in aluno){
    console.log("A chave do objeto aluno eh: "+chave+"E o valor eh: "+aluno[chave])
}

// console.log(`O aluno ${aluno.nome} mora na ${aluno.endereco.rua}`)
// Crie um objeto chamado "funcionario" usando o construtor new Object 
// com as propriedades:
// nome(string), profissão (string), matricula(string), salário(número).
// crie também o método calcular salário e aplique o desconto 
// correspondente ao salário.
//ex: 7,5% para salários até R$ 1.518,00; 
//9% para salários entre R$ 1.518,01 e R$ 2.793,88; 
//12% para salários entre R$ 2.793,89 e R$ 4.190,83;  
//14% para salários entre R$ 4.190,84 e R$ 8.157,41
//Em seguida, exiba no objeto o valor do salário;
const funcionario = new Object()
funcionario.nome = "José"
funcionario.profissao = "Motorista"
funcionario.salario = 4232.50
funcionario.calcular_salario = function(){
    if(this.salario <= 1518.01){
        return this.salario - this.salario * (7.5/100)
    }else if(this.salario > 1518.01 && this.salario <= 2793.88){
        return this.salario - this.salario * (9/100)
    }else if(this.salario > 2793.89 && this.salario <= 4190.83){
        return this.salario - this.salario * (12/100)
    }else{
        return this.salario - this.salario * (14/100)
    }
}

// console.log(funcionario.calcular_salario())

aluno.tcc = "APP MOBILE..."
aluno.atribuir_notas(8)
aluno.atribuir_notas(6)
aluno.uppercase()
aluno.calcular_media = function(){
    console.log(this)
}

// const carro = {
//     marca: "Toyota"
// }

// carro.modelo = "Corolla"
// carro.ano = 2025

const carro = new Object();
carro.marca = "Dodge"
carro.modelo = "Rampage"
carro.ano = 2000
carro.idade_do_carro = function(){
    return new Date().getFullYear() - this.ano
}
carro.dizestado = function(){
    const idade = this.idade_do_carro()
    if(idade > 25){
        console.log("O carro está bom")
    }else if(idade < 25 && idade > 30){
        console.log("O carro está MEIO bom")
    }else{
        console.log("Vende!")
    }
}

// console.log("O carro "+carro.marca+" Modelo "+carro.modelo+" Tem "+carro.idade_do_carro()+"anos")
console.log(aluno.calcular_media())

const pessoa = { nome:'Emanoel', idade:29, nota:6.0 }
const { nome, idade } = pessoa

console.log(nome, idade)