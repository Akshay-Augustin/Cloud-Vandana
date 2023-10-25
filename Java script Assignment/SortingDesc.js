const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sortDescending(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let maxIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j] > arr[maxIndex]) {
                maxIndex = j;
            }
        }

       
        const temp = arr[i];
        arr[i] = arr[maxIndex];
        arr[maxIndex] = temp;
    }
}

rl.question('Enter an array (comma-separated): ', (inputArray) => {
    const arr = inputArray.split(',').map(Number);
    sortDescending(arr);
    console.log('Sorted in descending order:', arr);
    rl.close();
});
