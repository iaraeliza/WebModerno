Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim

}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de honra')
    } else if(nota.entre(7, 8.99)){
        console.log('Aprovado')
    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperação')
    } else if (nota.entre(0, 3.99)) {
        console.log('Reprovado')
    } else {
        console.log('Nota inválida')
    }
    console.log ('fim')
}

imprimirResultado(10)   
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)


/* exemplo 2 */


function saudacao(hora) {
    if (hora >= 00 && hora <= 11) {
        console.log('bom dia')
    } else if (hora >= 12 && hora <= 17) {
        console.log('boa tarde')  
    } else if (hora >= 18 && hora <=23) {
        console.log('boa noite')
    }  else {
        console.log( 'eai?')
        
    }
}

saudacao(19)