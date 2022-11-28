const sequencia = {
    _valor: 1, // o anderlaine aqui é utilizado que essa constnat será utilizada apenas aqui dentro ( uma conveção, costume)
    get valor() { return this._valor++},
    set valor(valor) {
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}


console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)