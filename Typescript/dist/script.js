"use strict";
// Write Class Code Here
class Game {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    getDiscount(v) {
        console.log(`the discount is ${v}`);
    }
}
// Do Not Edit Here
let gameOne = new Game("Ys", 100);
let gameTwo = new Game(2064, 100); // There's A Game Called "2064"
console.log(gameOne.title); // "Ys"
console.log(gameOne.price); // 100
gameOne.getDiscount("50"); // "The Discount Is 50"
console.log(gameTwo.title); // 2064
console.log(gameTwo.price); // 100
gameTwo.getDiscount(80); // "The Discount Is 80"
