const cors = require('cors')
const express = require('express')
const { json } = require('express/lib/response')
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

app.get('/listaservicos', async (req, res) => {
    await servico
        .findAll({
            //raw: true
            order: [['id', 'ASC']]
        })
        .then(function (servicos) {
            res.json({ servicos })
        })
})

app.get('/listaclientes', async (req, res) => {
    await cliente
        .findAll({
            raw: true
        })
        .then(function (clientes) {
            res.json({ clientes })
        })
})

app.get('/ofertaservicos', async (req, res) => {
    await servico.count('id').then(function (servicos) {
        res.json({ servicos })
    })
})

app.get('/servico/:id', async (req, res) => {
    await servico
        .findByPk(req.params.id)
        .then(serv => {
            if (serv == null) {
                return res.json({
                    error: true,
                    message: 'Serviço não encontrado!'
                })
            } else {
                return res.json({ error: false, serv })
            }
        })
        .catch(function (erro) {
            return res.status(400).json({
                error: true,
                message: 'Erro: não foi possível conectar'
            })
        })
})

app.get('/listaclientes', async (req, res) => {
    await cliente
        .findAll({
            order: [['id', 'ASC']]
        })
        .then(function (clientes) {
            res.json({ clientes })
        })
})

app.get('/listaclientesantiguidade', async (req, res) => {
    await cliente
        .findAll({
            order: [['clienteDesde', 'ASC']]
        })
        .then(function (clientes) {
            res.json({ clientes })
        })
})

app.get('/listapedidos', async (req, res) => {
    await pedido
        .findAll({
            order: [['id', 'ASC']]
        })
        .then(function (pedidos) {
            res.json({ pedidos })
        })
})

app.get('/listaitempedidosdesc', async (req, res) => {
    await itempedido
        .findAll({
            order: [['valor', 'DESC']]
        })
        .then(function (itempedidos) {
            res.json({ itempedidos })
        })
})

app.get('/countclientes', async (req, res) => {
    await cliente.count('id').then(function (clientes) {
        res.json({ clientes })
    })
})

app.get('/countitempedidos', async (req, res) => {
    await itempedido.count('id').then(function (itempedidos) {
        res.json({ itempedidos })
    })
})

app.put('/atualizaservico', async (req, res) => {
    await servico
        .update(req.body, {
            where: { id: req.body.id }
        })
        .then(function () {
            return res.json({
                error: false,
                message: 'O serviço foi alterado com sucesso!'
            })
        })
        .catch(function (erro) {
            return res.status(400).json({
                error: true,
                message: 'Erro na alteração do serviço!'
            })
        })
})

app.get('/pedidos/:id', async (req, res) => {
    await pedido
        .findByPk(req.params.id, { include: [{ all: true }] })
        .then(ped => {
            return res.json({ ped })
        })
})

app.put('/pedidos/:id/editaritem', async (req, res) => {
    const item = {
        quantidade: req.body.quantidade,
        valor: req.body.valor
    }
    if (!(await pedido.findByPk(req.params.id))) {
        return res.status(400).json({
            error: true,
            message: 'O pedido não foi encontrado!'
        })
    }
    if (!(await servico.findByPk(req.body.ServicoId))) {
        return res.status(400).json({
            error: true,
            message: 'O serviço não foi encontrado'
        })
    }
    await itempedido
        .update(item, {
            where: Sequelize.and(
                { ServicoId: req.body.ServicoId },
                { PedidoId: req.params.id }
            )
        })
        .then(function (itens) {
            return res.json({
                error: false,
                message: 'O pedido foi alterado com sucesso!',
                itens
            })
        })
        .catch(function (erro) {
            return res.status(400).json({
                error: true,
                message: 'Erro: não foi possível alterar!'
            })
        })
})

app.get('/clientes/:id', async (req, res) => {
    await cliente
        .findByPk(req.params.id, { include: [{ all: true }] })
        .then(cli => {
            return res.json({ cli })
        })
})

app.put('/clientes/:id/editarcliente', async (req, res) => {
    const cli = {
        nome: req.body.nome,
        endereco: req.body.endereco
    }
    if (!(await cliente.findByPk(req.params.id))) {
        return res.status(400).json({
            error: true,
            message: 'O cliente não foi encontrado!'
        })
    }

    await cliente
        .update(cli, {
            where: { id: req.params.id }
        })
        .then(function (cli) {
            return res.json({
                error: false,
                message: 'O cliente foi alterado com sucesso!',
                cli
            })
        })
        .catch(function (erro) {
            return res.status(400).json({
                error: true,
                message: 'Erro: não foi possível alterar!'
            })
        })
})

app.put('/pedidos/:id/editarpedido', async (req, res) => {
    const ped = {
        ClienteId: req.body.ClienteId
    }
    if (!(await pedido.findByPk(req.params.id))) {
        return res.status(400).json({
            error: true,
            message: 'O pedido não foi encontrado!'
        })
    }

    await pedido
        .update(ped, {
            where: { id: req.params.id }
        })
        .then(function (cli) {
            return res.json({
                error: false,
                message: 'O pedido foi alterado com sucesso!',
                ped
            })
        })
        .catch(function (erro) {
            return res.status(400).json({
                error: true,
                message: 'Erro: não foi possível alterar!'
            })
        })
})

app.get('/cliente/:id/pedidos', async (req, res) => {
    if (req.params.id != 0 && req.params.id <= (await cliente.count('id'))) {
        await pedido
            .findAll({
                where: { ClienteId: req.params.id }
            })
            .then(ped => {
                if (ped == null) {
                    return res.json({
                        error: true,
                        message: 'O cliente não possui pedido!'
                    })
                } else {
                    return res.json({ error: false, ped })
                }
            })
            .catch(function (erro) {
                return res.status(400).json({
                    error: true,
                    message: 'Erro: não foi possível conectar'
                })
            })
    } else {
        return res.json({ error: true, message: 'Cliente não existe!' })
    }
})

app.put('/cliente/:id/editarpedido', async (req, res) => {
    if (req.params.id != 0 && req.params.id <= cliente.count('id')) {
        const ped = {
            ClienteId: req.body.ClienteId
        }
        if (ped == null) {
            return res.json({
                error: true,
                message: 'O cliente não possui pedido!'
            })
        } else {
            await pedido
                .update(ped, {
                    where: Sequelize.and(
                        { id: req.body.PedidoId },
                        { ClienteId: req.params.id }
                    )
                })
                .then(function (ped) {
                    return res.json({
                        error: false,
                        message: 'O pedido foi alterado com sucesso!'
                    })
                })
                .catch(function (erro) {
                    return res.status(400).json({
                        error: true,
                        message: 'Erro: não foi possível conectar'
                    })
                })
        }
    } else {
        return res.json({ error: true, message: 'Cliente não existe!' })
    }
})

app.get('/excluircliente/:id', async (req, res) => {
    await cliente
        .destroy({
            where: { id: req.params.id }
        })
        .then(function () {
            return res.json({
                error: false,
                message: 'O cliente foi excluído com sucesso'
            })
        })
        .catch(function (erro) {
            return res.status(400).json({
                error: true,
                message: 'Erro de conexão'
            })
        })
})

let port = process.env.PORT || 3001

app.listen(port, (req, res) => {
    console.log('Servidor ativo: http://localhost:3001')
})
