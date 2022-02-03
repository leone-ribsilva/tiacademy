//throu -> irá lançar uma excessão definida pelo usuário que será enviada para o primeiro bloco catch.

var n = prompt('Digite um número qualquer')
try {
    n = Number(n)
    if (isNaN(n)) throw 'O valor digitado não é um número'
    alert(`N é o número ${n}`)
} catch (e) {
    alert(`Erro: ${e}`)
} finally {
    n = 0
}
