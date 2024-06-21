// Función 1: push
// Comienza push
let array1 = [1, 2, 3];
array1.push(4); // [1, 2, 3, 4]
// Termina push

// Función 2: pop
// Comienza pop
let array2 = [1, 2, 3, 4];
array2.pop(); // [1, 2, 3]
// Termina pop

// Función 3: shift
// Comienza shift
let array3 = [1, 2, 3, 4];
array3.shift(); // [2, 3, 4]
// Termina shift

// Función 4: unshift
// Comienza unshift
let array4 = [1, 2, 3];
array4.unshift(0); // [0, 1, 2, 3]
// Termina unshift

// Función 5: map
// Comienza map
let array5 = [1, 2, 3];
let mappedArray = array5.map(x => x * 2); // [2, 4, 6]
// Termina map

// Función 6: filter
// Comienza filter
let array6 = [1, 2, 3, 4];
let filteredArray = array6.filter(x => x > 2); // [3, 4]
// Termina filter

// Función 7: reduce
// Comienza reduce
let array7 = [1, 2, 3, 4];
let sum = array7.reduce((acc, x) => acc + x, 0); // 10
// Termina reduce

// Función 8: forEach
// Comienza forEach
let array8 = [1, 2, 3];
array8.forEach(x => console.log(x)); // 1 2 3
// Termina forEach

// Función 9: includes
// Comienza includes
let array9 = [1, 2, 3];
let hasTwo = array9.includes(2); // true
// Termina includes

// Función 10: indexOf
// Comienza indexOf
let array10 = [1, 2, 3];
let index = array10.indexOf(2); // 1
// Termina indexOf

// Función 11: find
// Comienza find
let array11 = [1, 2, 3, 4];
let found = array11.find(x => x > 2); // 3
// Termina find

// Función 12: findIndex
// Comienza findIndex
let array12 = [1, 2, 3, 4];
let foundIndex = array12.findIndex(x => x > 2); // 2
// Termina findIndex

// Función 13: slice
// Comienza slice
let array13 = [1, 2, 3, 4];
let slicedArray = array13.slice(1, 3); // [2, 3]
// Termina slice

// Función 14: splice
// Comienza splice
let array14 = [1, 2, 3, 4];
array14.splice(1, 2); // [1, 4]
// Termina splice

// Función 15: concat
// Comienza concat
let array15a = [1, 2];
let array15b = [3, 4];
let concatenatedArray = array15a.concat(array15b); // [1, 2, 3, 4]
// Termina concat

// Función 16: join
// Comienza join
let array16 = [1, 2, 3];
let joinedString = array16.join('-'); // "1-2-3"
// Termina join

// Función 17: reverse
// Comienza reverse
let array17 = [1, 2, 3];
array17.reverse(); // [3, 2, 1]
// Termina reverse

// Función 18: sort
// Comienza sort
let array18 = [3, 1, 2];
array18.sort(); // [1, 2, 3]
// Termina sort

// Función 19: isArray
// Comienza isArray
let array19 = [1, 2, 3];
let isArray = Array.isArray(array19); // true
// Termina isArray

// Función 20: from
// Comienza from
let arrayLike = '123';
let array20 = Array.from(arrayLike); // ['1', '2', '3']
// Termina from

// Función 21: keys
// Comienza keys
let array21 = ['a', 'b', 'c'];
let keys = Array.keys(array21);
for (let key of keys) {
    console.log(key); // 0 1 2
}
// Termina keys

// Función 22: values
// Comienza values
let array22 = ['a', 'b', 'c'];
let values = array22.values();
for (let value of values) {
    console.log(value); // 'a' 'b' 'c'
}
// Termina values

// Función 23: entries
// Comienza entries
let array23 = ['a', 'b', 'c'];
let entries = array23.entries();
for (let entry of entries) {
    console.log(entry); // [0, 'a'] [1, 'b'] [2, 'c']
}
// Termina entries

// Función 24: some
// Comienza some
let array24 = [1, 2, 3];
let hasGreaterThanTwo = array24.some(x => x > 2); // true
// Termina some

// Función 25: every
// Comienza every
let array25 = [1, 2, 3];
let allPositive = array25.every(x => x > 0); // true
// Termina every

// Función 26: fill
// Comienza fill
let array26 = [1, 2, 3];
array26.fill(0); // [0, 0, 0]
// Termina fill

// Función 27: copyWithin
// Comienza copyWithin
let array27 = [1, 2, 3, 4];
array27.copyWithin(0, 2); // [3, 4, 3, 4]
// Termina copyWithin

// Función 28: flat
// Comienza flat
let array28 = [1, [2, 3], [4, 5]];
let flatArray = array28.flat(); // [1, 2, 3, 4, 5]
// Termina flat

// Función 29: flatMap
// Comienza flatMap
let array29 = [1, 2, 3];
let flatMappedArray = array29.flatMap(x => [x, x * 2]); // [1, 2, 2, 4, 3, 6]
// Termina flatMap

// Función 30: isNaN
// Comienza isNaN
let value1 = 'abc';
let isNotANumber = isNaN(value1); // true
// Termina isNaN
