//match() Procura uma palavra em uma string
//let nome = 'Leone Silva'
//console.log(nome.match('L'))

//search() procura pela ocorrência e retorna a posição(índice) na cadeia da string
//console.log(nome.search(/l/i))

//replace() Substitui uma string por outra
// let nome = 'Leone Silva'
// let novoNome = nome.replace(/silva/gi, 'Ribeiro Silva')
// console.log(novoNome)

//localeCompare() compara strings
// let nome1 = 'Silva'
// let nome2 = 'Silva'
// console.log(nome1.localeCompare(/nome2/gi))

//toString() converte qualquer valor em string
// let n = 10
// console.log(n.toString())
// console.log(n)

//toLowerCase() Converte a string para caracteres minúsculos
// let nome = 'Leone Ribeiro SILVA'
// console.log(nome.toLowerCase())
// let a = 'silva'
// let b = 'SILVA'
// let nome1 = a.toLowerCase()
// let nome2 = b.toLowerCase()
// console.log(nome1.localeCompare(nome2))

//toUpperCase() Converte a string para caracteres maiúsculos
// let a = 'silva'
// let b = 'Silva'
// let nome1 = a.toUpperCase()
// let nome2 = b.toUpperCase()
// console.log(nome1.localeCompare(nome2))

//trim() remove espaços no início e no fim da string especificada
// let nome1 = '    Leone Ribeiro Silva    '
// console.log(nome1.trim())

// let nome2 = '    Leone Ribeiro Silva    '
// console.log(nome2)

//NaN > quando uma string for passada para Number() parseInt ou parseFloat e não consiga efetuar a conversão, será retornado NaN (Not as Number)
//isNaN
// let num = Number('1')
// console.log(isNaN(num)) //true

//toFixed() analisa um valor flutuante e retorna uma string conforme o parâmetro das casas
let valor = 3500 / 3
// console.log(valor.toFixed(1))

//toLocaleString() retorna uma string em uma representação da moeda definida como parâmetro no currency
console.log(
    valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
)
