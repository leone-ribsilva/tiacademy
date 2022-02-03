function calcular(idProduto, resultado) {
    const preco = document.querySelectorAll(`#${idProduto} > li`)
    const valorResultado = document.querySelector(`#${resultado}`)
    let totalzinho = 0

    for (let i of preco) {
        totalzinho += Number(i.dataset.preco)
    }
    valorResultado.value = `R$ ${totalzinho.toFixed(2)}`
}
function removerProdutos(id) {
    const obj = document.querySelectorAll(`#${id} > li`)
    for (let produto of obj) {
        var e = window.event
        var target = e.target
        target.remove()
        calcular('cestaDoCliente', 'mostraTotalCompra')
    }
}
export { calcular, removerProdutos }
