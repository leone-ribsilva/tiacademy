//while > laço de repetição que executa uma determinada ritina enquando uma condição for verdadeira. A condição é avaliada antes da execução da rotina.

// let loop = 0
// let cores = ['Verde', 'Vermelho']
// while (loop < cores.length) {
//     console.log(cores[loop])
//     loop++
// }

let teste = 0

do {
    teste = Number(prompt('Digite 0 para sair!'))

    switch (teste) {
        case 0:
            alert('Saindo do sistema')
            break
        case 1:
            alert('Cadastrando')
            break

        case 2:
            alert('Consultando')
            break

        default:
            alert('Opção inválida!')
            break
    }
} while (teste != 0)
