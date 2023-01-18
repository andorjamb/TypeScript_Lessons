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