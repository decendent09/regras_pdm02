//Repetir
const abc = 'abc';
console.log(abc.repeat(2))

//Replace
let frase = 'Hoje o dia está bonito!';
console.log('Ultilizando Replace')
console.log(frase)
console.log(frase.replace('dia','noite')
       .replace('dia','noite')
       .replace('bonito','bonita')
       .replace('o','a'));

//Caracter no final da frase
console.log('Utilizando endsWith')
console.log(frase.endsWith('o!'))

//Caracter no inicio da frase
console.log('Utilizando starttsWith')
console.log(frase.startsWith('o!'))

//Convertendo para minusculo
let fraseM = 'HOJE O DIA ESTÁ BONITO';
console.log('Utilizando tolowerCase')
console.log(frase.toLowerCase())

//Convertendo para maiusculo
console.log('Utilizando toUpperCase')
console.log(frase.toUpperCase())


