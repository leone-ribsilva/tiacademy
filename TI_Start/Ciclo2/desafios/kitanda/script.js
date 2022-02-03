import { calcular, removerProdutos } from './util.js'
calcular('cestaDoCliente', 'mostraTotalCompra')
removerProdutos('cestaDoCliente')

window.onload = function () {
    //Lista de itens da Kitanda
    let produtos = [
        { descricao: 'Abacate', preco: 2.2 },
        { descricao: 'Açaí', preco: 7.0 },
        { descricao: 'Cupuaçú', preco: 1.8 },
        { descricao: 'Limão', preco: 2.35 },
        { descricao: 'Bacuri', preco: 20.0 },
        { descricao: 'Castanha do Pará', preco: 50.0 },
        { descricao: 'Bacaba', preco: 10.0 },
        { descricao: 'Buriti', preco: 5.0 }
    ]

    //Gera a lista de produtos automaticamente na página
    const listaProdutos = document.querySelector('#listaProdutos')
    const itemClicado = document.querySelector('#listaProdutos')
    const ulLiCesta = document.querySelector('#cestaDoCliente')
    let prodCesta = []
    ;(() => {
        for (let pro of produtos) {
            const filhoLi = document.createElement('li')
            for (let listaP in pro) {
                if (listaP == 'preco') {
                    listaProdutos
                        .appendChild(filhoLi)
                        .setAttribute('data-preco', pro[listaP])

                    listaProdutos
                        .appendChild(filhoLi)
                        .setAttribute('id', 'lista')
                } else {
                    listaProdutos.appendChild(
                        filhoLi
                    ).textContent = `${pro[listaP]}`
                }
            }
        }
    })(produtos)

    //Adiciona o item clicado à cesta
    itemClicado.addEventListener('click', function () {
        var e = window.event
        var target = e.target
        var texto = target.textContent
        let cestaCliente = document.createElement('li')
        const precoItem = target.getAttribute('data-preco')
        let estapresentenoarray = prodCesta.includes(texto) //true or false

        //Restringe a inserção de um item se ele já estiver na cesta, caso não esteja adiciona à cesta
        if (estapresentenoarray == true) {
            alert(`O item ${texto} já está na sua cesta!`)
        } else {
            ulLiCesta.appendChild(cestaCliente).innerText = texto
            ulLiCesta
                .appendChild(cestaCliente)
                .setAttribute('data-preco', precoItem)
            var insereArray = prodCesta.push(texto)
            calcular('cestaDoCliente', 'mostraTotalCompra')
        }
    })

    //Remove o item clicado da cesta
    ulLiCesta.addEventListener('click', () => {
        var e = window.event
        var target = e.target
        removerProdutos('cestaDoCliente')
        prodCesta.splice(prodCesta.indexOf(target.innerText), 1)
    })
}
