let word = "nissin";

let reserveWord = "";

for (let i = word.length - 1; i >= 0; i--) {
    reserveWord += word[i];
}

if (word === reserveWord) {
    console.log(`${word} is palyndrome word`)
   }
    else {
    console.log(`${word} is not palyndrome word`)
}
    
/*

hasil:
nissin is palyndrome word

*/