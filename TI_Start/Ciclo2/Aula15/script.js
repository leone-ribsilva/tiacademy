// let m = 1
// //console.log(typeof m)
// if (typeof m === 'string') {
//     console.log(`m é uma string`)
// } else {
//     console.log(`m não é uma string`)
// }

window.onload = function () {
    //alert('Ola povo do JS')

    const botao = document.getElementById('btn')
    const txtBox = document.querySelector('#txtBox')
    const caixa = document.querySelector('#caixa')

    botao.addEventListener('click', function () {
        caixa.innerHTML += ' ' + txtBox.value + ' '
    })
}
