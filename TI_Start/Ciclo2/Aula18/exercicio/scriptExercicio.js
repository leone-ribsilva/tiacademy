window.onload = function () {
    let veiculos = ['Ônibus', 'Motocicleta', 'Patinete']

    const btnLista = document.querySelector('#btn')
    const lista = document.querySelector('#listaveiculos')

    btnLista.addEventListener('click', () => {
        for (veic of veiculos) {
            let li = document.createElement('li')
            lista.appendChild(li).textContent = veic
        }
        // lista.appendChild(li).setAttribute('class', 'listav')
        // lista.appendChild(li).textContent = veiculos.value
    })
}
