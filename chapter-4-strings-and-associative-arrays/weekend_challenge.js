// Weekend Challenge: String and Associative Arrays

// 1. How many letters (including spaces) are in the text? How many words?
function howManyLetters(text) {
    return text.length;
}

const text = `A curious traveler ventured across the vast, golden plains where soft winds whispered through dense, fragrant forests. The sky above was a brilliant azure, streaked with wisps of cotton clouds drifting lazily, while the sun cast its warm glow over the rolling hills. As the journey continued, rocky cliffs towered on one side, their jagged edges a stark contrast to the smooth valley below. Streams, like silver ribbons, wound through the landscape, reflecting the gleam of sunlight with every turn.`;

console.log(howManyLetters(text));

// 2.   How many wodrs?
function howManyWord(text) {
    const words = text.split(" ");
    return words.length;
}
console.log(howManyWord(text));

// 3. How many unique letters? Ignoring punctuation
