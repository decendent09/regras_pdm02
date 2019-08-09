let lista = [];                 
console.log(lista);

//Adicionando um item
lista.push('Carvão');
lista.push('Carne');
lista.push('Cerveja');
lista.push(10)
console.log(lista)

//Que todo array começa com zero

console.log(lista[0]);

// O pop sempre remove o ultimo item da lista

console.log(lista.pop());

console.log(lista);

// Remover item em posição especifica
//Primeiro parametro- Começa 
//Segundo parametro - deleta itens
//Terceiro parametro - adiciona itens

console.log(lista.splice(0,1));

//Filtrando informações
console.log('Utlizando filter');
console.log(lista.filter(e => e === 'Carne'))

//Buscando informação com Find
console.log('Utilizando Find');
console.log(lista.find(v => v === 'Carne'));

//Verificar tamanho da lista
console.log('Tamanho da lista')
console.log(lista.length)

//Adicionar item em posição especifica
console.log(lista.splice(0,0,'elemento'));

console.log(lista);


let numeros = [1,2,3,4,5,6,7,8,9,10];
const resultados = numeros.map(Math.sqrt)
console.log('Ultilizando Raiz Quadrada')
console.log(resultados)

