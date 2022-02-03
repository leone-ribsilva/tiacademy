//Tamplate Strings
let txt = `Qualquer conteúdo!`
let txt2 = `Uma outra string ${txt}`
console.log(txt2)

//Arrays
//Uma coleção de dados
//É constituído por elementos
const frutas = ['Uva', 'Banana', 'Laranja', 'Maracujá'] //tamanho do Array = 4

let euGosto = `Eu gosto de ${frutas[2]}`
//console.log(euGosto)
// console.log(frutas[0])
// console.log(frutas[1])
// console.log(frutas[2])
// console.log(frutas[3])

for (let n = 0; n <= 3; n++) {
    console.log(frutas[n])
}

const Pessoa = [
    'José', //0
    23, //1
    'Solteiro', //2
    'Futebol', //3
    1.7, //4
    (cores = ['azul', 'preto', 'preto', 'vermelho', 'salmão']) //5
]
console.log(Pessoa[5][0]) //Array bidimensional
// ;(function () {
//     const jose = `Meu nome é ${Pessoa[0]}, eu tenho ${Pessoa[1]} anos e sou ${Pessoa[2]}. Gosto de jogar ${Pessoa[3]} e minha altura é ${Pessoa[4]}m`
//     document.write(jose)
// })(Pessoa)
//console.log(jose)
