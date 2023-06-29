import fruit from './foods';
import { choice, remove } from './helpers';
const fruits =
	["🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🍎", "🍏", "🍐", "🍒", "🍓", "🥝", "🍅", "🥑"];


const fruitsLeft = fruits;
const randomFruit = choice(fruitsLeft);

console.log(`I'd like one ${randomFruit}, please`);
console.log(`Here you go: ${randomFruit}`);
console.log("Delicious! May I have another?")
remove(fruitsLeft, randomFruit)
console.log(`I'm sorry, we're all out. We have ${fruitsLeft}`)