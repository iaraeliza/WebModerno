const pilotos = ['Vetel', 'Alonso', 'Raikkonen', 'Massa']

// retira o ultimo elemento do array
pilotos.pop() 
console.log(pilotos)

//adiciona um elemento a ultima  posição do array
pilotos.push('Verstappen')
console.log(pilotos)

// remove primeiro elemento do array
pilotos.shift()
console.log(pilotos)


//adiciona um elemento a primeira posição
pilotos.unshift('Hamilton')
console.log(pilotos)

// splice pode adicionar, remover elementos 
// ATENÇÃO: no splice o primeiro numero é a posição que voce que mexer e o seguno numero é o quantos elementoss voce quer remover

//adicionando o primeiro numero diz a qual posição voce irá adicionar 

pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//removendo
pilotos.splice(3, 1)
console.log(pilotos)

//novo array

const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

//slice pega apartir do numero que voce passou e até o segundo numero
//por exemplo abaixo pegou o elemento do indice 1 e foi até o elemento nuemro quantor, sem incluir o numero quatro

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)





