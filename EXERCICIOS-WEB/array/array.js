let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[3])


//adicionando elementos ao array 

aprovados[3] = 'Paulo'
aprovados.push('Abia')
// para saber o tam do array
console.log(aprovados.length)
console.log(aprovados)

aprovados[9] = 'Rafael'
console.log(aprovados[8] === undefined)

// reorganizar os elementos a sorte, mas depois voltam ao normal
console.log(aprovados)
aprovados.sort()
console.log(aprovados)

// deletando elementos do array

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

// o splice faz basicamente tudo, deleta, adiciona e edita elementos do array

aprovados = ['Bia', 'Carlos', 'Ana' ]
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')
console.log(aprovados)