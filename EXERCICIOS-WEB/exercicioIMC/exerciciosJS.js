/*Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
função) e com ponto de exclamação "!" no final.
Exemplos:
cumprimentar("Leonardo") // retornará "Olá, Leonardo!"
cumprimentar("Maria") // retornará "Olá, Maria!"
*/

function cumprimentar(nome) {
    console.log('Olá, ' + nome)
}

cumprimentar('Leonardo')
cumprimentar('Maria')

/*Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.
📕 Obs: considere que um ano tem 365 dias. Desconsidere anos bissextos (com 366 dias) e
desconsidere também dias decorridos desde o último aniversário.
Exemplos:
converterIdadeEmAnosParaDias(25) // retornará 9125
converterIdadeEmAnosParaDias(70) // retornará 25550
*/

function converterIdadeEmAnosParaDias(x) {
    console.log(x * 365)
}

converterIdadeEmAnosParaDias(26)

/*Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$
X", em que X é o quanto o funcionário ganhou no mês.
Exemplos:
calcularSalario(150, 40.5) // retornará "Salário igual a R$ 6075"
*/

function salario(horasTrabalhadas, salarioHora) {
    console.log('Salário igual a R$' + (horasTrabalhadas * salarioHora))
}

salario(150, 40.5)

/*Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será -1. Se o parâmetro de
entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do tipo
...".
Exemplos:
inverso(true) // retornará false
inverso("6") // retornará "booleano ou número esperados, mas o parâmetro é do tipo string"
inverso(-2000) // retornará 2000
inverso("programação") // retornará "booleano ou números, mas o parâmetro é do tipo string"
*/

const inverso = function (z) {
    const tipo = typeof z
    if (tipo == Number) {
        console.log(z * -1)
    } else if (tipo == Boolean) {
        console.log(!z)
    } else {
        console.log(`booleano ou números, mas o parâmetro é do tipo ${tipo}`)
    }
}



inverso(true)
inverso("6")
inverso(-2000)
inverso("programação")

/*Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação.
Exemplo:
multiplicar(5, 5) // retornará 25
multiplicar(0, 7) // retornará 0

*/

function multiplicar(numx, numy) {
    let resultado = 0
    for (let i = 0; i < numy; i++)
        resultado += numx
    return resultado

}

console.log(multiplicar(5, 5))

/*Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado.
Exemplos:
repetir("código", 2) // retornará ["código", "código"]
repetir(7, 3) // retornará [7, 7, 7]

*/

function repetir(elemento, repetições) {
    let resultado = []
    for (let i = 0; i < repetições; i++)

        console.log(resultado)
}

repetir("código", 2)
repetir(7, 3)

/*Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.
Exemplos:
simboloMais(2) // retornará "++"
simboloMais(4) // retornará "++++"
**/

function simboloMais(n) {
    let resultado = ""
    for (let i = 0; i < n; i++)
        resultado += '+'
    console.log(resultado)

}
simboloMais(2)
simboloMais(4)

/*Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array:
Exemplos:
receberPrimeiroEUltimoElemento([7,14,"olá"]) // retornará [7, "olá"]
receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]) // retornará [-100, 16]
*/

function receberPrimeiroEUltimoElemento(elemento) {
    const primeiroelemento = elemento.pop()
    const ultimoelemento = elemento.shift()
    console.log([primeiroelemento, ultimoelemento])
}
receberPrimeiroEUltimoElemento([7, 14, "olá"])

/*Quando temos um objeto e manipulamos seus atributos, adicionando, atualizando ou removendo-os, estamos
apenas modificando-o, mas, em essência, o objeto continua o mesmo, ou seja a sua referência de memória é a
mesma.
Num projeto que você está trabalhando, você foi designado a refatorar diversas funções para que façam cópias
de objetos e manipulem os dados dessas cópias, com o intuito de evitar efeitos indesejáveis em algumas
situações devido a referências a objetos. Abaixo, está a descrição de uma dessas funções.
Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o nome
de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a propriedade
especificada no segundo parâmetro.
Exemplos:
removerPropriedade({a: 1, b: 2}, "a") // retornará {b: 2}
removerPropriedade({
id: 20,
nome: "caneta",
descricao: "Não preenchido"
}, "descricao") // retornará {id: 20, nome: "caneta"}
💡 A fim de testar se o objeto retornado não é o mesmo que foi passado como parâmetro para a função
removerPropriedade, você poderá usar a função Object.is(), por exemplo:
Object.is(removerPropriedade(objeto, "descricao"), objeto)
Retornará false se o objeto não for o mesmo.
*/


function removerPropriedade(objeto, elementoDoObjeto) {
    const copia = { ...objeto }
    delete copia[elementoDoObjeto]
    console.log(copia)
}
removerPropriedade({ a: 1, b: 2 }, "a")

/*Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro.
Exemplos:
filtrarNumeros(["Javascript", 1, "3", "Web", 20]) // retornará [1, 20]
filtrarNumeros(["a", "c"]) // retornará []
*/


function filtrarNumeros(elementos) {
    console.log(elementos.filter(item => typeof item === "number"))

}

filtrarNumeros(["Javascript", 1, "3", "Web", 20])
filtrarNumeros(["a", "c"])


/*desenvolva uma função que recebe como parametro um objeto e retorne um array com arrays*/



var objeto = {
    nome: 'Maria',
    profissão: 'desenvolvedora de software'
}

console.log(Object.entries(objeto));


/*elabore uma função de numeros pares que retorne um array com os numeros e indices pares*/


function retornaPares(n) {
    let numerosPares = []
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            numerosPares.push(i)
        }
    }
    return numerosPares
}

retornaPares(20)

function retornaNNumerosPares(n) {

    let resultado = [];
    for (let i = 0; i < n; i += 2) {
        if (i % 2 == 0) {
            resultado.push(n[i])
        }
    }
    return resultado;
}
retornaNNumerosPares(20)



for (let i = 0; i < 8; i += 2) {
    let numeros = (10)
    const numeroPar = numeros[i] % 2 === 0
    if (numeroPar)
        console.log(resultado.push(numeros[i]))
}

function retornaNNumerosPares(n) {

    let numerosPares = [];
    for (let i = 0; i < n; i++) {
        if (i % 2 == 0) {
            numerosPares.push(i)
        }
    }
    return numerosPares;
}
retornaNNumerosPares(5)



/*faça uma função que determine se o ano é bissexto regras: multiplo de 4 e não pode ser multiplo de 100 exceto se tambem for multiplo de 400*/


function bissexto(ano) {
    const multiplo4 = ano % 4 === 0
    const multiplo100 = ano % 100 === 0
    const multiplo400 = ano % 400 === 0

    return(multiplo4 && !multiplo100) || multiplo400

}

console.log(bissexto(2022))

/*Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
Exemplos:
somarNumeros([10, 10, 10]) // retornará 30
somarNumeros([15, 15, 15, 15]) // retornará 60

*/

var numeros = [1, 2, 3, 4, 5, 6];
var total = numeros.reduce((total, numero) => total + numero, 0);


console.log(total);

/*Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é
possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você está
desenvolvendo no momento é a de somar o total das despesas.
Crie uma função que receba um array de produtos e retorne o total das despesas.
Exemplos:
despesasTotais([
{nome: "Jornal online", categoria: "Informação", preco: 89.99},
{nome: "Cinema", categoria: "Entretenimento", preco: 150}
]) // retornará 239.99
despesasTotais([
{nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
{nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
]) // retornará 34599.89 */


/*Nesse ano de eleições, os candidatos a presidente estão apresentando seus programas de governo.
Um desses programas é sobre a agricultura familiar. É bem interessante, vamos analisar a sua
experiência.
Ele fez uma experiência com 13.500 agricultores e verificou-se que:
• 7.000 plantam arroz;
• 4.100 plantam banana;
• 3.100 plantam uva;
• 2.100 plantam arroz e banana;
• 1.400 plantam arroz e uva;
• 1.000 plantam banana e uva;
• 400 plantam arroz, banana e uva.
Tendo essas informações, vamos responder com a lógica:
a) Quantos plantam pelo menos uma das três espécies?
b) Quantos não plantam nenhuma das três espécies?
c) Quantos plantam arroz ou banana, mas não plantam uvas?
d) Quantas plantam apenas uvas?*/


const plantamArroz = 7000
const plantamBanana = 4100
const plantamUva = 3100
const plantamArrozeBanana = 2100
const plantamArrozeUva = 1400
const plantamBananaeUva = 1000
const plantamArrozeBananaeUva = 400
const plantamAs3epecies = (plantamArroz + plantamBanana + plantamUva)


/*c) Quantos plantam arroz ou banana, mas não plantam uvas?*/
console.log(plantamArroz || plantamBanana && !plantamUva)

/* calculadora*/

function multiplicar(numx, numy) {
    let resultado = 0
    for (let i = 0; i < numy; i++)
        resultado += numx
    return resultado

}

function somar(numx, numy) {
    return numx + numy
    
}

function subtrair(numx, numy) {
    return numx - numy
    
}

/* escreva uma função que recebe 2 numerps e retorne o maior deles*/

function nummax(x, y) {
    console.log(Math.max(x, y))
}

nummax(58, 10)


function nummaxx(a, b) {
    
    return a > b ? a : b 
}

console.log(nummaxx(7, 55))

let max = (d, e) => d > e ? d : e

console.log(max(1, 3))


/* fiz buzz */
function fizbuz(i) {
    if (i % 3 === 0 & i % 5 === 0) {
    return 'fizzBuzz'
} else if (i % 3 != 0 & i % 5 != 0) {
    return i
} else if (i % 3 === 0) {
    return 'fiz'
} else if (i % 5 === 0) {
    return 'Buzz'
} else if (i != number) {
    return i  
} else {
    return i  
}
}



for (let h = 0; h <= 100; h++) {
    console.log(h, fizbuz(h)) 
}

