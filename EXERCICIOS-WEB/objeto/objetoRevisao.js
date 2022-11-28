//objeto é uma coleção dinamica de pares chave/valor

const produto = new Object
// ´´e prossivel atribuir propriedades no obejeto usando a notaação '.' como abaixo:
produto.nome = 'Cadeira'
// ou utilizando colchetes como abaixo
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)

// pode- se deletar as propriedades com o delete
delete produto.preco
delete produto['marca do produto']

console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123,
        }
    },
    consutores: [{
        nome:'Junior',
        idade: 19,
    },{
        nome:"Ana",
        idade:42
    }],
    calcularValorSeguro: function() {
        //...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)