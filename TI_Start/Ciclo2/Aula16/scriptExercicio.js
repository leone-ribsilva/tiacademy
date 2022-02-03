window.onload = function () {
    const tab = document.querySelector('#tabuada')
    const btn = document.querySelector('#CALCULAR')
    const resp = document.querySelector('#resposta')

    btn.addEventListener('click', function () {
        let num = Number(tab.value)
        let mult = 0

        if (isNaN(num)) {
            resp.innerHTML = 'Digite um valor numérico válido!'
        } else {
            if (num < 1 || num > 10) {
                resp.innerHTML = 'Digite um número entre 1 e 10!'
            } else {
                resp.innerHTML = `<b><i>Tabuada do número ${tab.value}</i></b>`
                while (mult <= 10) {
                    resp.innerHTML += `<br>${num} x ${mult} = ${mult * num}`
                    mult++
                }
            }
        }
    })
}
