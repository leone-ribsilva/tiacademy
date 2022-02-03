// function Pessoa(nome) {
//     this.nome = nome
// }

// Pessoa.prototype.msg = function () {
//     alert(`Olá ${this.nome}!`)
// }

// let novaPessoa = new Pessoa('Leone')
// let outraPessoa = new Pessoa('Patrícia')

// novaPessoa.msg()
// outraPessoa.msg()
//     // document.write(novaPessoa.nome)
// console.log(novaPessoa)

// let Pessoa2 = {
//     nome: '',
//     idade: ''
// }

// //console.log(Pessoa2)

// Pessoa2.__proto__.msg = function () {
//     alert(`Olá ${Pessoa2.nome}`)
// }
// let P = Pessoa2
// P.nome = 'Leone'
// P.msg()

// console.log(P)

let Pessoa3 = [
    {
        nome: 'Leone',
        idade: 34,
        sexo: 'M'
    },

    {
        nome: 'Patrícia',
        idade: 42,
        sexo: 'F'
    },

    {
        nome: 'Rosa',
        idade: 58,
        sexo: 'F'
    },

    {
        nome: 'Léo',
        idade: 62,
        sexo: 'M'
    }
]

let nPessoa = Pessoa3
console.log(`Existem ${nPessoa.length} pessoas cadastradas`)
console.log(nPessoa[1].nome)
