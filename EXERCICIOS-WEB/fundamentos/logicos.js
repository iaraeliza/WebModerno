/* o problema:  tenho dois trabalhos nesta semana, 
> se o primeiro e o segundo der certo : compro uma tv de 50" e tomo sorvete
> se apenas um dos trabalhos derem certo: compro uma tv de 32" e tomo sorvete
> se nenhum dos trabalhos der certo : não compro a tv e nem tomo sorvete
RESOLUÇÃO:
*/

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    const comprarTv32 = trabalho1 != trabalho2 
    const manterSaudavel = !comprarSorvete 

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))