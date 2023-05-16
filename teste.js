// console.log("Hello World!")

let nome = "Carolina"

const sobrenome = "Araujo"

console.log(nome + " " + sobrenome)

nome = "Raissa"

console.log(nome)

let numero1 = 30
let numero2 = 10

console.log(numero1 + numero2)

function dividir(num1, num2){
    if (num2 === 0)
    return "Não é possível dividir por zero"

    return num1 / num2
}

let resultado = dividir(10,0)
console.log(resultado)

const soma = (num1, num2) => num1 + num2

console.log(soma(20, 30))

function tabuada(num1){
    for(let contador = 1; contador <= 10; contador ++){
        console.log(`${num1} x ${contador} = ${num1 * contador}`)

    }
}

tabuada(5)

const nomes = ["Carolina", "Raissa", "Ramona"]

nomes.forEach(nome => console.log(nome))

