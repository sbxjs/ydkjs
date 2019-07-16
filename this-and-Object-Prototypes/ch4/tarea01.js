//Forma n°1 (Redefinir las propiedades del iterador después):

var objeto1 = {
    porp1 : 12,
    prop2 : 43
};

Object.defineProperty(objeto1, Symbol.iterator, {
    enumerable: false,
    writable: false,
    configurable: true,
    value: function(){
        var sco = this;
        var index = 0;
        var keyss = Object.keys(sco);
        return {
            next: function(){
                return{
                    value: [keyss[index], sco[keyss[index++]]],
                    done: (index > keyss.length)
                };
            }
        };
    }
});

for (var v of objeto1){
    console.log(v);
};

//Forma n°2 (Redefinir las propiedades del iterador en la declaración del objeto):
var objeto2 = {
    porp1 : 21,
    prop2 : 34,
    [Symbol.iterator]:function(){
        var sco = this;
        var index = 0;
        var keyss = Object.keys(sco);
        return {
            next: function(){
                return{
                    value: [keyss[index], sco[keyss[index++]]],
                    done: (index > keyss.length)
                };
            }
        };
    }
};

for (var w of objeto2){
    console.log(w);
};