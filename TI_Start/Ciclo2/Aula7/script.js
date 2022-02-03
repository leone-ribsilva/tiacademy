let msg = () => {
    alert('Estou feliz da vida com o JS')
}
msg()

function teste() {
    alert('Estou na functioin teste')
    return nome
}

// teste()

// teste()
// console.log(teste())
// let msg = nome => {
//     return nome
// }
// console.log(msg('José'))

// ;(function (produto, preco) {
//     alert('O produto é ' + produto + ' e o preço é de R$ ' + preco)
// })('Biscoito', 2.35) // 2.35

let v1 = prompt('Digite o valor 1')
let v2 = prompt('Digite o valor 2')

const soma = (valor1, valor2) => {
    let resultado = Number(valor1) / Number(valor2)
    console.log(resultado)
}

soma(v1, v2)
