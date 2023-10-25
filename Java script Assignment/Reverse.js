const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function reverseWords(sentence) {
    const words = [];
    let wordStart = 0;

    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === ' ' || i === sentence.length - 1) {
            const wordEnd = i === sentence.length - 1 ? i : i - 1;
            let reversedWord = '';
            for (let j = wordStart; j <= wordEnd; j++) {
                reversedWord = sentence[j] + reversedWord;
            }
            words.push(reversedWord);
            wordStart = i + 1;
        }
    }

    return words.join(' ');
}

rl.question('Enter a sentence: ', (inputSentence) => {
    const reversedSentence = reverseWords(inputSentence);
    console.log('Reversed Sentence:', reversedSentence);
    rl.close();
});
