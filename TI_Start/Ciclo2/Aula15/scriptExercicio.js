function tabuada(num) {
    let mult = 0
    if (typeof num !== 'number') {
        alert('Digite um valor numérico válido!')
    } else {
        if (num < 1 || num > 10) {
            console.log('Digite um número entre 1 e 10!')
        } else {
            console.log(`Tabuada do número ${num}`)
            while (mult <= 10) {
                console.log(`${num} x ${mult} = ${mult * num}`)
                mult++
            }
        }
    }
}
tabuada(Number(prompt('Digite um número entre 1 e 10!')))
