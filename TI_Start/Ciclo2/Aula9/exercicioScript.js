;(function () {
    let nome = prompt('Qual o seu nome completo?')
    let peso = prompt('Qual o seu peso em Kg?')
    let altura = prompt('Qual a sua altura em metros?')
    let imc = peso / altura ** 2
    document.write(
        `Nome: ${nome} <p/> Altura: ${altura}m <p/> Peso: ${peso}Kg <p/> IMC = ${imc.toFixed(
            2
        )} <p/>`
    )
})()
