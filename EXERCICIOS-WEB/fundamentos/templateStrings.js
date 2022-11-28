const nome = 'Rebeca'
const contatenacao = 'Olá  ' + nome + '!'
const template = `
    olá
    ${nome}!`
console.log(contatenacao, template);

//expressoes...
console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase();

// para colocar em maiusculo sem usar capslock

console.log(`Ei... ${up('cuidado')}!`);
