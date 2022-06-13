// variables primitivas
const num = 1;
console.log(typeof num);

const bigInit = 300000000n;
console.log(typeof bigInit);

const alfanumerico = 'string';
console.log(typeof alfanumerico);

const isValid = true;
console.log(typeof isValid);

const indefindo = undefined;
let emptyValue;

console.log(typeof indefindo);
console.log(typeof emptyValue);

console.log(null === undefined);

const symbol = Symbol();
console.log(typeof symbol);


// declarar una variable

const constante = 1;
// constante = 3; error
const constanteObj = {name: 'Jorge', lastName: 'Perez'};
const replica = constanteObj;
console.log(constanteObj);
replica.name = 'Claudia';
console.log(constanteObj);

const constanteObj2 = {name: 'Jorge', lastName: 'Perez'};
constanteObj.name = 'Daniel';


console.log(constanteObj === constanteObj2);
console.log(constanteObj === replica);



let cambiante = 1;
cambiante = 3;

// bad practice - variable without scope
var cambianteWithoutScope = 3;

// condicionales 

const number3 = 3;
const string3 = '3';

console.log(number3 === string3); // good practice
console.log(number3 == string3); // bad practice
console.log(number3.toString() === string3);

console.log(number3 !== string3);
console.log(number3 >= 3);
console.log(number3 > 3);
console.log(number3 <= 3);
console.log(number3 < 3);

let persona;
console.log(!!persona);

const admin = 'Daniel';
console.log(!!admin);

const isInvalid = false;

console.log(!isInvalid);

const booleanTest = true;

// obj - arreglos - methods

const obj = { 'name': 'Daniel', lastName: 'Gómez', document: { type: 'CC', number: 1151 } };
console.log(typeof obj);

const array = [1, 3, 4, true, 'string', obj, undefined];
console.log(typeof array);

        //tradicional 
        function method(arg) {
            // logic valid type of args
            if (typeof arg === 'string') {
                //logic
            } else {
                // throw 'No puedo realizar ejecución';
            }
        };

        // arrow function
        const method2 = (arg) => {
            // logic
        };

        method('string');
        method(1);
        method(false);
        method2('string');

// callback

 function methodWithArgCallback(methodInput, numb1, num2) {
    return methodInput(numb1 + num2);
 }

 const callback = (result) => {
   return result.toString();
 }

 const stringCallback = methodWithArgCallback(callback, 1, 3);
 console.log(stringCallback);
 
 arrayForCallback = [1, 2, 3, 4, 5];

 function methodArray(callback) {
    for (const element of arrayForCallback) {
     callback(element);
    }
 }

 let sum = 0;
 const callbackForEachData = (eachData) => {
    sum += eachData;
 };

 let major = 0;
 const callForMejor = (eachData) => {
    major = major < eachData ? eachData : major;
 };

 let menior = 99999999999;
 const callBackForMenior = (eachData) => {
     menior = menior > eachData ? eachData : menior;
 }

methodArray(callbackForEachData);
console.log(sum);
methodArray(callForMejor);
console.log(major);
methodArray(callBackForMenior);
console.log(menior);


//array function

let meniorWithForEach = 99999;
let objForeach = {};
const callbackForEach = (value, index, array) => {
    if (meniorWithForEach > value) {
        meniorWithForEach = value;
        objForeach = {value, index, array}
    }
};

// ForEach
[1, 2, 3, 4 , 5, 0].forEach(callbackForEach);
console.log(meniorWithForEach);
console.log(objForeach);


// Map
const arrabaseMap = [1, 2, 3, 4 , 5, 0];
const resultMap = arrabaseMap.map((val, indx, array) => {
    return val * 2;
});

console.log(resultMap);
console.log(arrabaseMap);

// Filter

const callbackFilter = function(value, index, array) {
    return value % 2 === 0;
};

const callbackFilterInpair = function(value, index, array) {
    return value % 2 !== 0;
};
const pairs = [1, 2, 3, 4, 5, 6].filter(callbackFilter);
const inpairs = [1, 2, 3, 4, 5, 6].filter(callbackFilterInpair);
console.log(pairs);
console.log(inpairs);

// Find -- Some 
const callbackFind = (value, index) => {
    return value % 2 === 0 && index > 8;
};

const arrayBaseFindSome = [1, 2, 3, 4, 5, 6];
const resultFind = arrayBaseFindSome.find(callbackFind);
console.log(resultFind);

const resultSome = arrayBaseFindSome.some(callbackFind);
console.log(resultSome);

// reduce

const callBackReduce = function(prev, actual, indexActual, array) {
    console.log(`prev: ${prev} - actual: ${actual}`);
    return prev + actual;
};
const baseReduce = [1, 2, 3, 4, 5, 6];
const valueInitial = 0;
const resultReduce = baseReduce.reduce(callBackReduce, valueInitial);
console.log(resultReduce);

const valueInitialObj = { pairs: 0, inpairs: 0};
const pairAndInPairs = baseReduce.reduce(function(prev, act) {
    console.log('prev:', prev);
    console.log('act:', act);
    if(act % 2 === 0) {
        return {...prev, pairs: prev.pairs + act};
    } else {
        return {...prev, inpairs: prev.inpairs + act};
    }
}, valueInitialObj);

console.log(pairAndInPairs);


