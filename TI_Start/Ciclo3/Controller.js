// const express = require('express')
const cors = require('cors')

// const { sequelize } = require('./models')
// const models = require('./models')

const express = require('express')
const res = require('express/lib/response')
const { Sequelize } = require('./models')
const models = require('./models')

const app = express()
app.use(cors())
app.use(express.json())

let cliente = models.Cliente
let itempedido = models.ItemPedido
let pedido = models.Pedido
let servico = models.Servico

app.get('/', function (req, res) {
    res.send('Seja bem-vindo(a) a Services TI')
})

app.post('/servicos', async (req, res) => {
    await servico
        .create(req.body)
        .then(function () {
            return res.json({
                error: false,
                message: 'Serviço criado com sucesso!'
            })
        })
        .catch(function (erro) {
            return res.status(400).json({
                error: true,
                message: 'Impossível se conectar!'
            })
        })
})

app.post('/clientes', async (req, res) => {
    await cliente
        .create(req.body)
        .then(function () {
            return res.json({
                error: false,
                message: 'Cliente inserido com sucesso!',
                cli
            })
        })
        .catch(function (erro) {
            return res.status(400).json({
                error: true,
                message: 'Não foi possível inserir o cliente! Falha na conexão!'
            })
        })
})

app.post('/cliente/:id/pedido', async (req, res) => {
    const ped = {
        data: req.body.data,
        ClienteId: req.params.id
    }
    if (!(await cliente.findByPk(req.params.id))) {
        return res.status(400).json({
            error: true,
            message: 'Cliente não existe'
        })
    }
    await pedido
        .create(ped)
        .then(order => {
            return res.json({
                error: false,
                message: 'Pedido inserido com sucesso!',
                order
            })
        })
        .catch(erro => {
            return res.json({
                error: true,
                message: 'Não foi possível inserir o pedido'
            })
        })
})

app.post('/pedido/:id/itempedido', async (req, res) => {
    const ItemPed = {
        quantidade: req.body.quantidade,
        valor: req.body.valor,
        ServicoId: req.body.ServicoId,
        PedidoId: req.params.id
    }
    if (!(await pedido.findByPk(req.params.id))) {
        return res.status(400).json({
            error: true,
            message: 'Pedido não existe'
        })
    }
    await itempedido
        .create(ItemPed)
        .then(item => {
            return res.json({
                error: false,
                message: 'Item inserido com sucesso!',
                item
            })
        })
        .catch(erro => {
            return res.json({
                error: true,
                message: 'Não foi possível inserir o item'
            })
        })
})

// app.post('/servico/:id/itempedido', async (req, res) => {
//     const ItemPed = {
//         quantidade: req.body.quantidade,
//         valor: req.body.valor
//     }
//     if (!(await servico.findByPk(req.params.id))) {
//         return res.status(400).json({
//             error: true,
//             message: 'Servico não existe'
//         })
//     }
//     await itempedido
//         .create(ItemPed)
//         .then(item => {
//             return res.json({
//                 error: false,
//                 message: 'Item inserido com sucesso!',
//                 item
//             })
//         })
//         .catch(erro => {
//             return res.json({
//                 error: true,
//                 message: 'Não foi possível inserir o pedido'
//             })
//         })
// })

let port = process.env.PORT || 3001

app.listen(port, (req, res) => {
    console.log('Servidor ativo: http://localhost:3001')
})
