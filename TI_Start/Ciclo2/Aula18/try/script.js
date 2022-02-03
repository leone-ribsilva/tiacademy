//A variavel precisa ser do tipo inteiro, não float, não negativa
let m = 1

try {
    if (typeof m != 'number') throw new Error('Digite um número inteiro')
    if (m < 0) throw new Error('O número não pode ser menor que 0')
    if (m % 1 !== 0) throw new Error('Digite um número inteiro')
} catch (erro) {
    console.log(`O erro é:..${erro}`)
} finally {
    console.log('Cheguei no finally')
}
