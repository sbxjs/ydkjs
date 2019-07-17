const { createObjectIteratorDefineProperty, createObjectSimpleIterator } = require('./src/tarea01');


const objectIteratorDefineProperty = createObjectIteratorDefineProperty();
const itObjectIteratorDefineProperty = objectIteratorDefineProperty[Symbol.iterator]();

const objectSimpleIterator = createObjectSimpleIterator();
const itObjectSimpleIterator = objectSimpleIterator[Symbol.iterator]();


console.log('--- itObjectIteratorDefineProperty ---');

let result = itObjectIteratorDefineProperty.next();
console.log(result.value);
result = itObjectIteratorDefineProperty.next();
console.log(result.value);
result = itObjectIteratorDefineProperty.next();
console.log(result.value);

console.log('--- itObjectSimpleIterator ---');

result = itObjectSimpleIterator.next();
console.log(result.value);
result = itObjectSimpleIterator.next();
console.log(result.value);