let frutas = [
    { nome: 'Banana', preco: 1.35 },
    { nome: 'Laranja', preco: 2.05 },
    { nome: 'Abacate', preco: 5.95 }
]

function listaFrutas(f) {
    for (let elementosArray of f) {
        //console.log(elementosArray)
        for (let nomePropriedade in elementosArray) {
            console.log(
                `${nomePropriedade}    ->    ${elementosArray[nomePropriedade]}`
            )
        }
    }
}
listaFrutas(frutas)

// console.log(frutas[0].preco)

// let k = 0
// let total = frutas[k].preco.reduce(function (soma, i) {
//     return soma + i
// })
// console.log(total)
