// "delay" decorator
function delay(fn, ms) {
    return function() {
        setTimeout(fn, ms);
    }
}


function hi() {
    console.log('HI');
}


function bye() {
    console.log('BYE');
}

let delayedHi = delay(hi, 1000);
let delayedBye = delay(bye, 2000);

delayedHi() // ktpi 'HI' 1000 ms-ic
delayedBye() // ktpi 'BYE' 2000 ms-ic







// "cash" decorator
function cash(fn) {

    const hash = {}

    return function(arg) {
        if (arg in hash) {
            return hash[arg];
        }

        const result = fn(arg);
        hash[arg] = result;

        return result;
    }
}


function fibonacci(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}


const cashedFibonacci = cash(fibonacci);

console.log(cashedFibonacci(42));
console.log(cashedFibonacci(43));
console.log(cashedFibonacci(42));






























class A {


    prop = 1;

    constructor() {

    }

    f() {
        setInterval(() => {
            this.prop++
        }, 1000);
    }
}

let x = new A();

x.f();