export const createObjectIteratorDefineProperty = () => {
  const objeto1 = {
    prop1: 12,
    prop2: 43
  };

  Object.defineProperty(objeto1, Symbol.iterator, {
    enumerable: false,
    writable: false,
    configurable: true,
    value: function () {
      const sco = this;
      const keysSCO = Object.keys(sco);
      let index = 0;
      return {
        next: function () {
          return {
            value: [keysSCO[index], sco[keysSCO[index++]]],
            done: (index > keysSCO.length)
          };
        }
      };
    }
  });

  return objeto1;
}

export const createObjectSimpleIterator = () => {
  const objeto2 = {
    prop1: 21,
    prop2: 34,
    [Symbol.iterator]: function () {
      const sco = this;
      const keysSCO = Object.keys(sco);
      let index = 0;
      return {
        next: function () {
          return {
            value: [keysSCO[index], sco[keysSCO[index++]]],
            done: (index > keysSCO.length)
          };
        }
      };
    }
  };

  return objeto2;
}
