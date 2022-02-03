//concat() junta dois ou mais arrays
// let nomes = ['Leone', 'Juline', 'Aline', 'Rosa', 'Léo']
// console.log(nomes)
// console.log(nomes.join())

//push() insere elementos no fim do array
//let frutas = ['Uva', 'Pêra', 'Jaca', 'Nevascaranga']

// frutas.push('Maçã', 'Laranja')
// frutas.push('Laranja')
//console.log(frutas.indexOf('Jaca'))

// let insertFruta = 'Amora'
// if (frutas.indexOf(insertFruta) == -1) {
//     console.log(`A fruta ${insertFruta} não está na lista`)
//     frutas.push(insertFruta)
// } else {
//     console.log(`A fruta ${insertFruta} está na lista`)
// }
// console.log(frutas)

//pop() remove o último elemento de uma array
// let frutas = ['Uva', 'Pêra', 'Jaca', 'Nevascaranga']
// frutas.pop()
// console.log(frutas)

//reverse() Inverte a ordem dos elementos de uma array
// let frutas = ['Uva', 'Pêra', 'Jaca', 'Nevascaranga']
// frutas.reverse()
// console.log(frutas)
// console.log(frutas[0])

//shift() remove o primeiro elemento de um array
// let frutas = ['Uva', 'Pêra', 'Jaca', 'Nevascaranga']
// frutas.shift()
// console.log(frutas)

//sort() Ordena elementos de uma array em ordem crescente
// let numeros = ['200', '2', '1', '169', '3', '67']
// let alfa = ['n', 'e', 'c', 'a', 'b', 'j']
// numeros.sort()
// console.log(numeros)

//toString() converte um array em uma string e retorna esta string
// let frutas = ['Uva', 'Pêra', 'Jaca', 'Nevascaranga']
// console.log(frutas.toString())

//unshift() Insere um elemento no início do array
// let frutas = ['Uva', 'Pêra', 'Jaca', 'Nevascaranga']
// let insere = 'ABACATE'
// frutas.unshift(insere)
// console.log(frutas)

//splice() corta ou remove um elemento de um array em um ponto indicado
let nomes = ['Leone', 'Juline', 'Aline', 'Rosa', 'Léo']
let indice = nomes.indexOf('Aline')
let novaLista = nomes.splice(indice, 1)
console.log(nomes)
console.log(novaLista)
