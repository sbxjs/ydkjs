import { createObjectIteratorDefineProperty, createObjectSimpleIterator } from './tarea01';

const compareValues = (obj) => {
  const keyVals = [];
  for(const keyVal of obj) {
    keyVals.push(keyVal);
  }

  Object.entries(obj).forEach(([key, val], index) => {
    const [key2Compare, val2Compare] = keyVals[index];
    expect(key).toBe(key2Compare);
    expect(val).toBe(val2Compare);
  })
};

it('createObjectIteratorDefineProperty', () => {
  const obj = createObjectIteratorDefineProperty();
  compareValues(obj);
});

it('createObjectSimpleIterator', () => {
  const obj = createObjectSimpleIterator();
  compareValues(obj);
});