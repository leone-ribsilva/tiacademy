//Laços de repetição

//for in > percorre as propriedades de um objeto

// let Pessoas = {
//     nome: 'Leone',
//     idade: 34,
//     altura: 1.71
// }

// for (let propriedades in Pessoas) {
//     console.log(Pessoas.nome)
// }

//for of
// let frutas = ['Manga', 'Abacate', 'Uva', 'Acerola']
// for (let nomeFruta of frutas) {
//     console.log(nomeFruta)
// }

let Pessoas = [
    {
        nome: 'Leone',
        idade: 34,
        altura: 1.71
    },

    {
        nome: 'Patrícia',
        idade: 42,
        altura: 1.68
    }
]

Pessoas.push({ nome: 'Aline', idade: 30, altura: 1.68 })
Pessoas.push({ nome: 'Rosa', idade: 58, altura: 1.6 })

// let todos = Pessoas[0].nome
// console.log(todos)

for (let array of Pessoas) {
    //console.log(array)
    for (let valorPropriedades in array) {
        document.write(`${valorPropriedades} - ${array[valorPropriedades]}<br>`)
    }
}
