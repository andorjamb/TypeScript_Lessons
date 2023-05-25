type strOrNum = string | number;
type objName = { name: string; uid: strOrNum };

const logDetails = (uid: string | number, item: any) => {
    console.log(`${item} has a uid of ${uid}`);
};

//can now rewrite as:

const logDetailsNew = (uid: strOrNum, item: any) => { console.log(`${item} has a uid of ${uid}`); }

const greet = (user: { name: string; uid: string | number }) => { console.log(`${user.name} says hello`); };

const greetNew = (user: objName) => {
    console.log(`${user.name} says hello`)
}

console.log('app.js speaking');

let button = document.getElementById('button')!;
button.addEventListener('click', () => { console.log('clicked') })

const add = (a: number, b: number=2) => {
    return a + b
}

const multiplyNums = (a: number, b: number=2) => a * b;

const divNums = (a: number, b: number) => {
    return a / b
}

console.log(add(4));

console.log(multiplyNums(4,3));

console.log(divNums(3, 4));