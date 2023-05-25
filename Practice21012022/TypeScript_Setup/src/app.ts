// Code goes here!
console.log("Welcome to TS World!");
const button = document.querySelector('button')! as HTMLButtonElement;

button.addEventListener('click', () => { console.log() })

console.log('button clicked');

type valType = number;


class Department {
    name: string;
    members: number;
    constructor() {
        this.name = name;
        this.members = members;
    }
}

/* class Product {
    title: string;
    price: number;
    private isListed: boolean;

    constructor(name: string, pr: number) {
        this.title = name;
        this.price = pr;
        this.isListed = true;
    }
} */
//shortened version:
class Product {
    private isListed: boolean;
    constructor(public title: string, public price: number) { this.isListed = true; }
}