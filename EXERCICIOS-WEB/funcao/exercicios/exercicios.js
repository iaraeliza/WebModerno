// 1  Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
//multiplicação e divisão desses valores.


function teste1(x, y) {
    console.log(x+y, x-y, x*y, x/y);
}

teste1(2, 4)

//02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
//Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
//Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
//ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
//triângulo)

function triagulo(lado1, lado2, lado3)  {
    if (lado1 == lado2 == lado3) {
        console.log('é um triangulo equilatero')
    } else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) { 
        console.log('é um triangulo isosceles')
    } else { 
        console.log('é um triangulo escaleno')
    }   
}


triagulo(1, 1, 1)
triagulo(1, 2, 2)
triagulo(1, 2, 3)

//03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.


function teste3 (base, expoente) {
    console.log(Math.pow(2, 3))
}

teste3 (2, 3)

//04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
//e o resto da divisão destes dois valores.

function teste4 (dividendo, divisor) {
    console.log('Resultado:', Math.floor(dividendo/divisor))
    console.log('Resto:', dividendo%divisor)

}

teste4(40, 7)

//05) Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o
//seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
//importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
//um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para
//que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).


function formatarValorDecimal(valorDecimal) {
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
}

formatarValorDecimal(0.1 + 0.2)

//06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
//primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
//retornará o valor da aplicação sob o regime de juros compostos.

function jurosSimples (capitalInicial, TaxaDeJuros, TempoDeAplicação) {
    console.log('Juros simples: ' + capitalInicial * (TaxaDeJuros * 0,01) * TempoDeAplicação)
}


function jurosComposto (capitalInicial, TaxaDeJuros, TempoDeAplicação) {
    console.log('Juros composto: ' + capitalInicial * (1 + (TaxaDeJuros * 0,01)) ** TempoDeAplicação)
}

jurosSimples(100, 10, 2)
jurosComposto(100, 10, 2)

//07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
//elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
//parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
//-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
//que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
//“Delta é negativo”.

function baskara (a, b, c) {
    let delta = (b ** 2) - (4 * a * c)
    let x1 = (-b + Math.sqrt(delta)) / (2 * a)
    let x2 = (-b - Math.sqrt(delta)) / (2 * a)
    if (delta < 0) {
        console.log('O delta é negativo')
    } else {
        console.log(x1)
        console.log(x2)
    }
}
baskara(1, 3, 2)
baskara(3, 1, 2)
baskara(3, -5, 12)
/*08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
*/


function jogos (pontuações) {
    let pontuacoes = [25, 30, 28, 29, 40, 52]
    let melhorPontuacao = Math.max.apply(Math, pontuacoes)
    let piorPontuacao = Math.min.apply(Math, pontuacoes)
    console.log('Melhor Pontuação: ' + (melhorPontuacao))
    console.log('Pior Pontuação: ' + (piorPontuacao))
}
jogos()

/*09) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado.*/


Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim

}

const imprimirResultado = function (nota) {
    let notaCorrigida = notaFinal(nota)
    if (nota.entre(40, 100)) {
        console.log(`Aprovado com nota ${notaCorrigida}`)
    } else if(nota.entre(38, 39.99)){
        console.log(`Aprovado com nota ${notaCorrigida}`)
    } else if (nota.entre(0, 37.99)) {
        console.log(`Reprovado com nota ${notaCorrigida}`)
    } else {
        console.log('Nota inválida')
    }
}

function notaFinal (nota) {
    return Math.ceil(nota / 5) * 5;
}

imprimirResultado(40)

//10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
//ou false.

function verificacao (x) {
    if (x % 3 == 0) {
        console.log('True')
    }
    else {
        console.log('False')
    }
}

verificacao(7)
verificacao(9)
verificacao(30)
verificacao(10)

/*11) As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false.

*/

function calcularAnoBissexto (ano) {
    if (ano <= 0){
        return false
    } else if (ano % 400 == 0) {
        return true
    } else if (ano % 100 == 0) {
        return false
    } else if (ano % 4 == 0) {
        return true
    } else {
        return false
    }
}

console.log(calcularAnoBissexto(0))
console.log(calcularAnoBissexto(4))
console.log(calcularAnoBissexto(100))
console.log(calcularAnoBissexto(400))
console.log(calcularAnoBissexto(800))
console.log(calcularAnoBissexto(2020))
console.log(calcularAnoBissexto(2021))


/*13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/

const verificarDia = function (dia) {
    switch (Math.floor(dia)) {
        case 1: case 7: 
            console.log('Fim de Semana')
            break
        case 2: case 3: case 4: case 5: case 6: 
            console.log('Dia útil')
            break
        default:
            console.log('Dia inválida')
    }
}

verificarDia(1)
verificarDia(3)

/*14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console.
*/

const verificarFruta = function (fruta) {
    switch (fruta) {
        case 'Maça':  
            console.log('Não Vendemos esta fruta aqui')
            break
        case 'Kiwi':
            console.log('Estamos com escassez de kiwis')
            break
        case 'Melancia':
            console.log('Aqui está, são 3 reais o quilo')
            break
        default:
            console.log('Error')
    }
}

verificarFruta('Maça')
verificarFruta('Kiwi')
verificarFruta('Caqui')
verificarFruta('Melancia')

/*16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.
*/


const calculadora = function (n1, operador, n2) {
    switch (operador) {
        case '+':  
            console.log(n1 + n2)
            break
        case '-':
            console.log(n1 - n2)
            break
        case '*':
            console.log(n1 * n2)
            break
        case '/':
            console.log(n1 / n2)
            break
        default:
            console.log('default')
    }
}

calculadora(2, '+', 7)
calculadora(2, '-', 7)
calculadora(8, '*', 2)
calculadora(8, '/', 2)

/*17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

const novoSalario = function (salarioAntigo, planoDeAumento) {
    switch (planoDeAumento) {
        case 'A':  
            console.log((salarioAntigo * 0.1)  + salarioAntigo )
            break
        case 'B':
            console.log((salarioAntigo * 0.15) + salarioAntigo )
            break
        case 'C':
            console.log((salarioAntigo * 0.2) + salarioAntigo )
            break
        default:
            console.log('default')
    }
}

novoSalario(3500, 'A')
novoSalario(3500, 'B')
novoSalario(3500, 'C')
novoSalario(3500, 'D')

/*18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’
*/


const lerNumero = function (numero) {
    switch (numero) {
        case 0:  
            console.log('zero')
            break
            case 1:  
            console.log('um')
            break
            case 2:  
            console.log('dois')
            break
            case 3:  
            console.log('três')
            break
            case 4:  
            console.log('quatro')
            break
            case 5:  
            console.log('cinco')
            break
            case 6:  
            console.log('seis')
            break
            case 7:  
            console.log('sete')
            break
            case 8:  
            console.log('oito')
            break
            case 9:  
            console.log('nove')
            break
            case 10:  
            console.log('dez')
            break
        default:
            console.log('default')
    }
}

lerNumero(0)
lerNumero(1)
lerNumero(2)
lerNumero(3)
lerNumero(4)
lerNumero(5)
lerNumero(6)
lerNumero(7)
lerNumero(8)
lerNumero(9)
lerNumero(10)

/*19) O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
*/

const tabelaDePrecos = function (codigoDoItem, quantidade) {
    switch (codigoDoItem) {
        case 100:  
            console.log( 3.00 * quantidade + ' R$' )
            break
            case 200:  
            console.log( 4.00 * quantidade + ' R$' )
            break
            case 300:  
            console.log( 5.5 * quantidade + ' R$' )
            break
            case 400:  
            console.log( 7.50 * quantidade + ' R$' )
            break
            case 500:  
            console.log( 2.00 * quantidade + ' R$' )
            break
        default:
            console.log('default')
    }
}

tabelaDePrecos(100, 3)
tabelaDePrecos(200, 1)
tabelaDePrecos(300, 5)
tabelaDePrecos(400, 1)
tabelaDePrecos(400, 2)
tabelaDePrecos(800, 3)

/*20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
*/

function gerarTroco(valor) {
    var notas = [100, 50, 10, 5, 1]
    var troco = {'50': 0, '10': 0, '5': 0, '1': 0}
    
    // Itero sobre o array de notas
    for (var nota of notas) {
      // Se o valor restante for maior que minha nota atual..
      while (valor >= nota) {
        // incremento a propriedade do objeto correspondente a nota
        troco[nota] += 1
        // e reduzo o valor restante pelo valor da nota
        valor -= nota
      }
    }
  
    return troco
  }
  
  console.log('Saque de 25:', gerarTroco(25))

  /*21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130
*/



function calcularPlanoDeSaude (idade) {
    if (idade < 10){
        return 180
    } else if (idade <30) {
        return 150
    } else if (idade <60) {
        return 195
    } else if (idade >=60) {
        return 230
    } else {
        return 'idade inválida'
    }
}

console.log(calcularPlanoDeSaude(55))

/*
22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.*/


function valorAPagar (mesAtual, valor) {
    if (mesAtual > 0 && mesAtual < 13) {
        return (valor * (1.05)**(mesAtual - 1)).toFixed(2)
    } else {
        return "Mês inválido"
    }
    
}

console.log(valorAPagar(4, 100))


/*23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
*/

/*24) Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while.*/

function helloWorld () {
    let i = 0
     while (i < 11) {
         console.log("Hello World");
         i++
     }   
 }
 
 helloWorld()

 /* crie uma função que retona a string "olá" concatenada com o argument text( aser passado) e com um ponde de exclamação no final "!" */


saudacao = text => 'Olá '+ text + " !"
console.log(saudacao("iara"))


/*escreve uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em */
console.clear()

idadeEmDias = idade=> idade  * 365
console.log(idadeEmDias(25))

function idadeEmdias2(idade2) {
    return idade2 * 365

    
}

console.log(idadeEmdias2(26))

/*desenvolva uma função que recebe dois paramentro, um é a quantidade de horas trabalhadas por um funcionário num mês, e o 
quanto ele recebe por hora. O retorno da função deve ser a string "salario igual a x, em que x é o quanto o funcionario ganhou no mes" */

function calcularSalario(salario, horas) {
    const vaiReceber = salario  * horas 
    console.log(vaiReceber)
    
}

calcularSalario(150, 40.5)

/* crie uma função que recebe um numero (de 1 a 12) e retorne o mes correspondente como uma string. Por exemplo, se a entrada for 2 a função deve retornar fevereiro */


const nomeDoMes = function (mes) {
    switch (mes) {
        case 1:
            console.log('Janeiro')
            break;
        case 2: 
            console.log('Fevereiro')
            break;
        case 3: 
            console.log('Março')
            break;
        default: 
            console.log('mes invalido!')
            break;
    }
    
}

nomeDoMes(4)


/*creie uma função que receba dois numeros e retorne se o primeiro é maior ou igual ao segundo.*/

maiorOuIgual = (n1, n2) => n1 > n2 | n1 === n2 ? true : false

console.log(maiorOuIgual(0, 0))


/*escreva  uma função que recebe um valor booleano ou numerico. Se o parametro fornecido for booleano, o retorno da função 
devera ser o inverso. */

function inverso(variavel) {
    const tipo = typeof variavel
    if (tipo == "boolean") {
        return !variavel
    }
    else if (tipo == "number" ) {
        return -variavel
    }
    else { 
        return 'boleanos ou numeros esperados mais a variavel é do tipo ' + tipo
        
    }  
}

console.log(inverso('dfd'))


/* escreva uma função que receba dois paramentros, o primerio é o elemento que repetira, o segundo sera o numero de vezes da 
repetição, retornar em um array */

function repetir(item, quantidade) {
    return Array(quantidade).fill(item)
    }

console.log(repetir("código", 2)) 

function simboloMais(quantidade) {
    return Array(quantidade).fill('+').join('')
    }
    console.log(simboloMais(4))
    
/*Quando temos um objeto e manipulamos seus atributos, adicionando, atualizando ou removendo-os, estamos 
apenas modificando-o, mas, em essência, o objeto continua o mesmo, ou seja a sua referência de memória é a mesma.
Num projeto que você está trabalhando, você foi designado a refatorar diversas funções para que façam cópias 
de objetos e manipulem os dados dessas cópias, com o intuito de evitar efeitos indesejáveis em algumas situações 
devido a referências a objetos. Abaixo, está a descrição de uma dessas funções.
Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o nome de uma 
propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a propriedade especificada no 
segundo parâmetro.*/ 


const obj = {a: 1, b: 2}

function removerPropriedade(obj, remov) {
    const obj12 = {id: 20, nome: 'caneta', descrição: 'nao preenci'}
    delete obj12[remov]
    return obj12
}

console.log(removerPropriedade(({a: 1, b: 2}), "a"))
console.log(removerPropriedade(({id: 20, nome: 'caneta', descrição: 'nao preenci'}), 'descrição'))